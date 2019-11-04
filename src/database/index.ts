import { Sequelize } from 'sequelize';
const config = require('../config/database');

import Employees from '../app/models/Employees';
import Jobs from '../app/models/Jobs';

const connection = new Sequelize(config);

const models = [ Employees, Jobs ];

models.map(model => model.init(connection))
      // .map(model => model.associate && model.associate(connection.models))

export default connection;