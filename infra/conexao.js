const mysql = require("mysql");

const conexao = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  passwor: "root",
  database: "agenda",
});

module.exports = conexao;
