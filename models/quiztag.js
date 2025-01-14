'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuizTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      QuizTag.belongsTo(models.Quiz, {
        foreignKey: 'quiz_id'
      })
      
      QuizTag.belongsTo(models.Tag, {
        foreignKey: 'tag_id'
      })
    }
  }
  QuizTag.init({
    quiz_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QuizTag',
  });
  return QuizTag;
};