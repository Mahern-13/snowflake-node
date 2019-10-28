const express = require("express");
const router = express.Router();

const oauthController = require("../controllers/oauthController");

router.get("/oauth", oauthController.access_token);

module.exports = router;
