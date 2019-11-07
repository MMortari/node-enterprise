import { Sequelize } from 'sequelize';
const config = require('../config/database');

import Regions from '../app/models/Regions';
import Countries from '../app/models/Countries';
import Locations from '../app/models/Locations';

const connection = new Sequelize(config);

Regions.init(connection);
Countries.init(connection);
Locations.init(connection);

Regions.associate(connection.models);
Countries.associate(connection.models);
Locations.associate(connection.models);

export default connection;