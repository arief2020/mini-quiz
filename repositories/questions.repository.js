const { Question } = require('../models');

class QuestionsRepository {
  static async findAll() {
    try {
      const questions = await Question.findAll();
      return questions
    } catch (error) {
      throw error
    }
  }

  static async findById(id) {
    try {
      const question = await Question.findOne({ where: { id } });
      return question
    } catch (error) {
      throw error
    }
  }

  static async create(data) {
    try {
      const question = await Question.create(data);
      return question
    } catch (error) {
      throw error
    }
  }

  static async update(data, id) {
    try {
      const question = await Question.update(data, { where: { id } });
      return question
    } catch (error) {
      throw error
    }
  }

  static async delete(id) {
    try {
      const question = await Question.destroy({ where: { id } });
      return question
    } catch (error) {
      throw error
    }
  }
}

module.exports = QuestionsRepository