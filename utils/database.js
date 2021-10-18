/* const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_student",
});

module.exports = pool.promise();
 */

const Sequelize = require("sequelize");

const squelize = new Sequelize("node_tutor", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = squelize;
