const mongoose = require("mongoose");
const {ObjectId} = require('mongodb');


var MoviesSchema = new mongoose.Schema({
    backdrop:String,
    cast:Array,
    classification:String,
    director:String,
    genres: Array,
    id:String,
    imdb_rating:String,
    length:String,
    overview:String,
    poster:String,
    released_on:String,
    slug:String,
    title:String,
    updated_at: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Movies_list', MoviesSchema);