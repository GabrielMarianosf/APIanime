const app = require("./src/app");

require("dotenv/config");

const port = process.env.NODE_PORT;

app.listen(port || 3001, () =>
  console.log(`Servidor Rodando na porta ${port}`)
);
