// require('./../bootstrap');

// module.exports = {
//   dialect: process.env.DB_DIALECT,
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_DATABASE,
//   define: {
//     timestamps: false,
//     underscored: true
//   }
// };
module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'node-enterprise',
  define: {
    timestamps: false,
    underscored: true
  },
  logging: false
};