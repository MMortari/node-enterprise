'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('employees', [
      {
        employee_id: 1,
        first_name: 'Jennifer',
        last_name: 'Dilly',
        email: 'JDILLY',
        phone_number: '650.505.2876',
        hire_data: new Date(),
        job_id: 1,
        salary: 3500,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('employees', null, {});
  }
};
