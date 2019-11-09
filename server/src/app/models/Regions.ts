import Sequelize, { Model } from 'sequelize';

class Regions extends Model {

  static init(sequelize) {
    super.init({
      region_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      region_name: Sequelize.STRING
    }, { sequelize });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Countries, {
      foreignKey: 'region_id',
      as: 'another'
    })
  }

}

export default Regions;