import Sequelize, { Model } from 'sequelize';

class Departments extends Model {

  static init(sequelize) {
    super.init({
      department_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      department_name: Sequelize.STRING
    }, { sequelize });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Employees, {
      foreignKey: 'manager_id',
      as: 'manager'
    })
    this.belongsTo(models.Locations, {
      foreignKey: 'location_id',
      as: 'location'
    })
    this.hasMany(models.Employees, {
      foreignKey: 'department_id',
      as: 'employees'
    })
  }

}

export default Departments;