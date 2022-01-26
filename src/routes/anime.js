const express = require("express");
const router = express.Router();

const AnimeController = require("../Controller/anime-controller");

router.get("/listall", AnimeController.ListAnimes);
router.get("/search", AnimeController.searchAnime);

router.get("/:id", AnimeController.animeID);

module.exports = router;
