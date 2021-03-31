const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");

module.exports = () => {
  //criando nossa aplicação
  const app = express();

  //use() é utilizado para carregar libs dentro do express, para ler o body em JSON da requisição
  app.use(bodyParser.json());

  //incluir tudo que está na pasta controllers dentro do app
  consign().include("controllers").into(app);

  return app;
};
