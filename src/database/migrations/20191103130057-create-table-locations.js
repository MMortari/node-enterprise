'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('locations', { 
      location_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      street_address: Sequelize.STRING,
      postal_code: Sequelize.STRING,
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state_province: Sequelize.STRING,
      country_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'countries',
          key: 'country_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('locations');
  }
};
