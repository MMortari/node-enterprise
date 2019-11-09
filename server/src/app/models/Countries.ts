import Sequelize, { Model } from 'sequelize';

class Countries extends Model {

  static init(sequelize) {
    super.init({
      country_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      country_name: Sequelize.STRING
    }, { sequelize });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Regions, {
      foreignKey: 'region_id',
      as: 'region'
    })
    this.hasMany(models.Locations, {
      foreignKey: 'country_id',
      as: 'countries'
    })
  }

}

export default Countries;