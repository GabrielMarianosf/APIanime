const api = require("../services/api");
require("dotenv/config");

exports.ListEpisodeID = async function (req, res, next) {
  const param = req.params.id;
  if (isNaN(param) === true) {
    return res.status(400).json({
      status: "400",
      message: `Erro - Valor inválido - '${param}' `,
      author: "https://github.com/GabrielMarianosf",
    });
  }
  try {
    api
      .get("https://api.aniapi.com/v1/episode?anime_id=11")
      .then((response) => {
        return res.status(200).json({
          status: "200",
          message: "Episodios Encontrados",
          author: "https://github.com/GabrielMarianosf",
          data: response.data.data,
          links: {
            url: `${process.env.URL_BASE_API}/${param}`,
          },
        });
      });
  } catch (error) {}
};
