'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Quiz.belongsTo(models.Category, {
        foreignKey: 'category_id'
      })

      Quiz.hasMany(models.Question, {
        foreignKey: 'quiz_id'
      })
      
      Quiz.hasMany(models.Result, {
        foreignKey: 'quiz_id'
      })

      Quiz.hasMany(models.QuizTag, {
        foreignKey: 'quiz_id'
      })

      Quiz.belongsToMany(models.User, {
        foreignKey: 'author',
      })

    }
  }
  Quiz.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    author: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Quiz',
  });
  return Quiz;
};