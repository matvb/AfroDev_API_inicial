const express = require("express");
const consign = require("consign");

module.exports = () => {
  //criando nossa aplicação
  const app = express();

  //use() é utilizado para carregar libs dentro do express, para ler o body em JSON da requisição
  app.use(express.json());

  //incluir tudo que está na pasta controllers dentro do app
  consign().include("controllers").into(app);

  return app;
};
