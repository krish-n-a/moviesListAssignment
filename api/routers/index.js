const express = require("express");
const router = express.Router();
const moviesRoutes = require('./movieList')

router.use(moviesRoutes)


module.exports = router;