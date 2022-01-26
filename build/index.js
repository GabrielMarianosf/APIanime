"use strict";

var _app = require("./app");

require("dotenv/config");

var port = process.env.NODE_PORT;
(0, _app.listen)(port, function () {
  return console.log("Servidor Rodando na porta ".concat(port));
});
//# sourceMappingURL=index.js.map