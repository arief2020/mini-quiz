const AuthService = require("../services/auth.service");

class AuthController {
  static async register(req, res, next) {
    try {
      const registerUser = await AuthService.register(req.body);

      return res.status(200).json(registerUser);
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const loginUser = await AuthService.login(req.body, res);
      return res.status(200).json(loginUser);
    } catch (error) {
      next(error);
    }
  }

  static async logout(req, res, next) {
    try {
      const logoutUser = await AuthService.logout(req.user, res);
      return res.status(200).json(logoutUser);
    } catch (error) {
      next(error);
    }
  }

  static async me(req, res, next) {
    try {
      console.log(req.user, "ini user")
      const me = await AuthService.me(req.user);
      return res.status(200).json(me);
    } catch (error) {
      next(error);
    }
  }

  static async updateMe(req, res, next) {
    try {
      const me = await AuthService.updateMe(req.user, req.body);
      return res.status(200).json(me);
    } catch (error) {
      next(error);
    }
  }

  static async deleteMe(req, res, next) {
    try {
      const me = await AuthService.deleteMe(req.user);
      return res.status(200).json(me);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
