const express = require("express");
const router = express.Router();

const EpisodeController = require("../Controller/apisode-controller");

router.get("/:id", EpisodeController.ListEpisodeID);

module.exports = router;
