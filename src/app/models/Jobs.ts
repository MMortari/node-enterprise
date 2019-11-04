import Sequelize, { Model } from 'sequelize';

class Jobs extends Model {

  static init(sequelize) {
    super.init(
      {
        job_id: Sequelize.INTEGER,
        job_title: Sequelize.STRING,
        min_salary: Sequelize.FLOAT(15, 2),
        max_salary: Sequelize.FLOAT(15, 2)
      },
      { sequelize }
    )
    super.removeAttribute('id');

    return this;
  }

  static associate(models) {
    this.hasMany(models.Employees, {
      foreignKey: 'job_id',
      as: 'job-employee'
    })
  }
 
}

export default Jobs;