import Sequelize, { Model } from 'sequelize';

class Employees extends Model {

  static init(sequelize) {
    super.init(
      {
        employee_id: Sequelize.INTEGER,
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone_number: Sequelize.STRING,
        hire_data: Sequelize.DATE,
        salary: Sequelize.FLOAT(15, 2),
        comission_pct: Sequelize.FLOAT(15, 2)
      },
      { sequelize }
    )
    super.removeAttribute('id');

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Job, {
      foreignKey: 'job_id',
      as: 'jobs'
    })
  }
 
}

export default Employees;