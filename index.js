const configExpress = require("./config/configExpress");
const conexao = require("./infra/conexao");

const app = configExpress();

conexao.connect((error) => {
  if (error) {
    throw error;
  } else {
    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
  }
});
