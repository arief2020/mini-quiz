'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Answer.belongsTo(models.Question, {
        foreignKey: 'question_id'
      })

      Answer.hasMany(models.Result, {
        foreignKey: 'answer_id'
      })
      
    }
  }
  Answer.init({
    question_id: DataTypes.INTEGER,
    is_correct: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};