'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('departments', [
      {
        department_id: 1,
        department_name: "TI",
        manager_id: 1,
        location_id: 1100
      },
      {
        department_id: 2,
        department_name: "Finances",
        manager_id: 1,
        location_id: 1200
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('departments', null, {});
  }
};
