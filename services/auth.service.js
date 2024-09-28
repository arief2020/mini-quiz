const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../libs/bcrypt");
const dotenv = require('dotenv');
const UserRepository = require("../repositories/user.repository");
dotenv.config()

class AuthService {
  static async register(params) {
    try {
      const { username, email, password, confirmPassword, photo } = params;

      if (password != confirmPassword) {
        throw {
          name: "BadRequest",
          message: "Password and Confirm Password are not same",
        };
      }
      const hashingPassword = hashPassword(password);

      const register = await UserRepository.create({
        username,
        email,
        password: hashingPassword,
        photo,
      });
      return { message: "Success register users", data: register };
    } catch (error) {
      throw error;
    }
  }

  static async login(params, res) {
    try {
      let { email, password } = params;

      const user = await UserRepository.findByEmail(email);
      if (user === null) {
        throw { name: "InvalidCredentials", message: "Email user not found" };
      }
      const matchingPassword = await comparePassword(password, user.password);

      if (!matchingPassword) throw { name: "InvalidCredentials" };

      const accessToken = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "1d",
        }
      );

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      return { accessToken: accessToken, message: "Success Login User" };
    } catch (error) {
      throw error;
    }
  }

  static async me(user) {
    try {
      console.log(user)
      const me = await UserRepository.findById(user.id);
      return me;
    } catch (error) {
      throw error;
    }
  }

  static async updateMe(user, params) {
    try {
      const { username, email, photo } = params;
      const me = await UserRepository.update(user.id, {
        username,
        email,
        photo,
      });
      const getMe = await UserRepository.findById(user.id);
      return getMe;
    } catch (error) {
      throw error;
    }
  }

  static async logout(req, res) {
    try {
      res.clearCookie("accessToken");
      return { message: "success logout" };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async deleteMe(user) {
    try {
      const me = await UserRepository.delete(user.id);
      return { message: "Success delete account" };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthService;
