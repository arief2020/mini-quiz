const { User } = require("../models");
class UserRepository {
  static async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async findByEmail(email) {
    try {
      const user = await User.findOne({ where: { email } });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async findById(id) {
    try {
      const user = await User.findOne({ where: { id } });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, data) {
    try {
      const user = await User.update(data, { where: { id } });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const user = await User.destroy({ where: { id } });
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserRepository;
