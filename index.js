const app = require("./src/app");

require("dotenv/config");

const port = process.env.NODE_PORT;

app.listen(process.env.PORT || port, () =>
  console.log(`Servidor Rodando na porta ${port}`)
);
