const express = require("express");
const router = express.Router();
const Movies_list = require("../models/movieListSchema");
const { basicAuth } = require("../middleware/auth")
const Controller = require("../controllers/movieList")

router.post("/addMovie", basicAuth(), Controller.createMovie);

router.get("/getMovies", basicAuth(), Controller.getMovies);

router.delete("/deleteMovies", basicAuth(), Controller.deleteMovie);

router.get("/getMovieGeners", basicAuth(), Controller.getMovieGeners);




module.exports = router;