const axios = require("axios");
require("dotenv/config");

const api = axios.create({
  baseURL: "https://api.aniapi.com",
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

module.exports = api;
