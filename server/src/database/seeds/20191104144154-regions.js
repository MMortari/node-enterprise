'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('regions', [
      {
        region_id: 1,
        region_name: 'Europe'
      },
      {
        region_id: 2,
        region_name: 'Americas'
      },
      {
        region_id: 3,
        region_name: 'Asia'
      },
      {
        region_id: 4,
        region_name: 'Middle East and Africa'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('regions', null, {});
  }
};
