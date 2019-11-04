'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('jobs', [
      {
        job_id: 1,
        job_title: 'President',
        min_salary: 20080,
        max_salary: 40000
      },
      {
        job_id: 2,
        job_title: 'Administration Vice President',
        min_salary: 15000,
        max_salary: 30000
      },
      {
        job_id: 3,
        job_title: 'Administration Assistant',
        min_salary: 3000,
        max_salary: 6000
      },
      {
        job_id: 4,
        job_title: 'Finance Manager',
        min_salary: 8200,
        max_salary: 16000
      },
      {
        job_id: 5,
        job_title: 'Accountant',
        min_salary: 4200,
        max_salary: 9000
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jobs', null, {});
  }
};
