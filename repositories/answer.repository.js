const {Answer} = require('../models');

class AnswersRepository {
  static async findAll() {
    try {
      const answers = await Answer.findAll();

      return answers;
    } catch (error) {
      throw error;
      
    }
  }

  static async findById(id) {

    try {
      const answer = await Answer.findByPk(id);

      return answer;
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {

    try {
      const answer = await Answer.create(data);

      return answer;
    } catch (error) {
      throw error;
    }
  }

  static async update(data, id) {

    try {
      const answer = await Answer.update(data, { where: { id } });

      return answer;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {

    try {
      const answer = await Answer.destroy({ where: { id } });

      return answer;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AnswersRepository