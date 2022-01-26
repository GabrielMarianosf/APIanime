const api = require("../services/api");
require("dotenv/config");

exports.ListAnimes = async function (req, res, next) {
  try {
    await api
      .get("/v1/anime")
      .then((response) => {
        return res.status(200).json({
          status: "200",
          message: "Animes listados com Sucesso",
          author: "https://github.com/GabrielMarianosf",
          data: response.data.data,
          links: {
            url: `${process.env.URL_BASE_API}/listall`,
          },
        });
      })
      .catch((error) => {
        return res.status(400).json({
          status: "400",
          message: "Erro ao pocessar a solicitação - ListAll",
          author: "https://github.com/GabrielMarianosf",
          data: {
            message: error,
          },
        });
      });
  } catch (error) {
    res.status(500).send({
      status: "500",
      message: "Erro Interno",
      author: "https://github.com/GabrielMarianosf",
      data: {
        message: error,
      },
    });
  }
};

exports.animeID = async function (req, res, next) {
  const param = req.params.id;
  if (isNaN(param) === true) {
    return res.status(400).json({
      status: "400",
      message: `Erro - Valor inválido - '${param}' `,
      author: "https://github.com/GabrielMarianosf",
    });
  }
  try {
    await api
      .get(`/v1/anime/${param}`)
      .then((response) => {
        return res.status(200).json({
          status: "200",
          message: "Anime Encontrado",
          author: "https://github.com/GabrielMarianosf",
          data: response.data.data,
          links: {
            url: `${process.env.URL_BASE_API}/${param}`,
          },
        });
      })
      .catch((error) => {
        return res.status(400).json({
          status: "400",
          message: "Erro ao pocessar a solicitação - ID",
          author: "https://github.com/GabrielMarianosf",
          data: {
            message: error,
          },
        });
      });
  } catch (error) {
    res.status(500).send({
      status: "500",
      message: "Erro Interno",
      author: "https://github.com/GabrielMarianosf",
      data: {
        message: error,
      },
    });
  }
};

exports.searchAnime = async function (req, res, next) {
  const { q } = req.query;
  if (q === "") {
    return res.status(401).json({
      status: "401",
      message: "Erro - Valor Inválido",
      author: "https://github.com/GabrielMarianosf",
      data: [],
    });
  }
  try {
    await api
      .get(`/v1/anime?title=${req.query.q}`)
      .then((response) => {
        return res.status(200).send({
          status: "200",
          message: "Busca Realizada",
          author: "https://github.com/GabrielMarianosf",
          data: response.data.data,
          links: {
            url: `${process.env.URL_BASE_API}/search?q=${q}`,
          },
        });
      })
      .catch((error) => {
        return res.status(400).json({
          status: "400",
          message: "Erro ao pocessar a solicitação - Search",
          author: "https://github.com/GabrielMarianosf",
          data: {
            message: error,
          },
        });
      });
  } catch (error) {
    res.status(500).send({
      status: "500",
      message: "Erro Interno",
      author: "https://github.com/GabrielMarianosf",
      data: {
        message: error,
      },
    });
  }
};
