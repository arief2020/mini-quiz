'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      quiz_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Quizzes',
          key: 'id'
        }
      },
      score: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addConstraint('Results', {
      fields: ['user_id', 'quiz_id'],
      type: 'unique',
      name: 'unique_result',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Results');
  }
};