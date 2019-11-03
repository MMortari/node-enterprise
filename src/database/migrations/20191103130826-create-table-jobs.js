'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jobs', { 
      job_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      job_title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      min_salary: Sequelize.FLOAT(15, 2),
      max_salary: Sequelize.FLOAT(15, 2),
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('jobs');
  }
};
