import Sequelize, { Model } from 'sequelize';

class Employees extends Model {

  static init(sequelize) {
    super.init({
      employee_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      first_name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      email: Sequelize.STRING,
      phone_number: Sequelize.STRING,
      hire_date: Sequelize.DATE,
      salary: Sequelize.FLOAT(15, 2),
      comission_pct: Sequelize.FLOAT(15, 2),
    }, { sequelize });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Jobs, {
      foreignKey: 'job_id',
      as: "job"
    })
    this.belongsTo(models.Employees, {
      foreignKey: 'manager_id',
      as: "manager"
    })
  }
 
}

export default Employees;