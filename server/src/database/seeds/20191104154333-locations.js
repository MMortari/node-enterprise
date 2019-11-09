'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('locations', [
      {
        location_id: 1000,
        street_address: '1297 Via Cola di Rie',
        postal_code: '00989',
        city: 'Roma',
        state_province: null,
        country_id: 1
      },
      {
        location_id: 1100,
        street_address: '93091 Calle della Testa',
        postal_code: '10934',
        city: 'Venice',
        state_province: null,
        country_id: 1
      },
      {
        location_id: 1200,
        street_address: '2017 Shinjuku-ku',
        postal_code: '1689',
        city: 'Tokyo',
        state_province: 'Tokyo Prefecture',
        country_id: 2
      },
      {
        location_id: 1300,
        street_address: '9450 Kamiya-cho',
        postal_code: '6823',
        city: 'Hiroshima',
        state_province: null,
        country_id: 4
      },
      {
        location_id: 1400,
        street_address: '2014 Jabberwocky Rd',
        postal_code: '26192',
        city: 'Southlake',
        state_province: 'Texas',
        country_id: 3
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('locations', null, {});
  }
};
