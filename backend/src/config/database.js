// module.exports = {
//   dialect: 'mysql',
//   host: process.env.MYSQL_HOST,
//   username: process.env.MYSQL_USERNAME,
//   password: process.env.MYSQL_PASS,
//   database: process.env.MYSQL_DB,
// };

module.exports = {
  username: 'novaescola',
  password: 'novaescola',
  database: 'novaescola',
  host: '127.0.0.1',
  port: '3306',
  dialect: 'mysql',
  define: {
    timestamp: true,
  },
};
