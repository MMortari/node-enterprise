'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('countries', [
      {
        country_id: 1,
        country_name: 'Argentina',
        region_id: 2
      },
      {
        country_id: 2,
        country_name: 'Australia',
        region_id: 3
      },
      {
        country_id: 3,
        country_name: 'Belgium',
        region_id: 1
      },
      {
        country_id: 4,
        country_name: 'Brazil',
        region_id: 2
      },
      {
        country_id: 5,
        country_name: 'Egypt',
        region_id: 4
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('countries', null, {});
  }
};
