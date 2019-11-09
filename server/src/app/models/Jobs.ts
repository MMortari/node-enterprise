import Sequelize, { Model } from 'sequelize';

class Jobs extends Model {
  static init(sequelize) {
    super.init({
      job_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      job_title: Sequelize.STRING,
      min_salary: Sequelize.FLOAT(15, 2),
      max_salary: Sequelize.FLOAT(15, 2),
    }, { sequelize });

    return this;
  }
}

export default Jobs;