'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('regions', { 
      region_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      region_name: {
        type: Sequelize.STRING,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('regions');
  }
};
