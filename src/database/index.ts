import { Sequelize } from 'sequelize';
const config = require('../config/database');

import Regions from '../app/models/Regions';
import Countries from '../app/models/Countries';
import Locations from '../app/models/Locations';
import Jobs from '../app/models/Jobs';
import Employees from '../app/models/Employees';

const connection = new Sequelize(config);

Regions.init(connection);
Countries.init(connection);
Locations.init(connection);
Jobs.init(connection);
Employees.init(connection);

Regions.associate(connection.models);
Countries.associate(connection.models);
Locations.associate(connection.models);
Employees.associate(connection.models);

export default connection;