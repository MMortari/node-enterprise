import { Sequelize } from 'sequelize';
const config = require('../config/database');

const connection = new Sequelize(config);

export default connection;