const express = require("express");
const cors = require("cors");

// Rotas
const anime = require("./routes/anime");
const episode = require("./routes/episode");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", function (req, res) {
  res.type("application/json").status(200).json({
    status: "200",
    message: "Bem vindo a API de animes ;)",
    author: "https://github.com/GabrielMarianosf",
  });
});

app.use("/anime", anime);
app.use("/episode", episode);

module.exports = app;
