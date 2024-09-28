const { where } = require("sequelize");
const { Quiz } = require("../models");
class QuizRepository {
  static async findAll() {
    try {
      const quiz = await Quiz.findAll();
      return quiz;
    } catch (error) {
      throw error;
    }
  }

  static async findById(id) {
    try {
      const quiz = await Quiz.findById({ where: { id } });
      return quiz;
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      const quiz = await Quiz.create(data);
      return quiz;
    } catch (error) {
      throw error;
    }
  }

  static async update(data, id) {
    try {
      const quiz = await Quiz.update(data, { where: { id } });
      return quiz;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const quiz = await Quiz.destroy({ where: { id } });
      return quiz;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = QuizRepository;
