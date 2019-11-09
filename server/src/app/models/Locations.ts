import Sequelize, { Model } from 'sequelize';

class Locations extends Model {
  static init(sequelize) {
    super.init({
      location_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      street_address: Sequelize.STRING,
      postal_code: Sequelize.STRING,
      city: Sequelize.STRING,
      state_province: Sequelize.STRING,
    }, { sequelize })
  }

  static associate(models) {
    this.belongsTo(models.Countries, {
      foreignKey: 'country_id',
      as: 'country'
    })
  }
}

export default Locations;