'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('countries', {
      country_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      country_name: {
        type: Sequelize.STRING
      },
      region_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'regions',
          key: 'region_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('countries');
  }
};
