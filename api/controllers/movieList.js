const Movies_list = require("../models/movieListSchema")
const _ = require("lodash");

exports.createMovie = async (request, response) => {
    try {
      const movie = await Movies_list.create(request.body)
      response.send(movie)
    } catch (error) {
      console.log(error)
      response.status(500).send(error);
    }
}

exports.getMovies = async (request, response) => {    
    try {
      const findingGeners = await Movies_list.find({})
      response.send(findingGeners);
    } catch (error) {
      response.status(500).send(error);
    }
  };

exports.getMovieGeners = async (request, response) => {    
  try {
    const projectField = {
      director:1,
      imdb_rating:1 ,
      length: 1,
      poster: 1,
      title: 1,
      genres : 1
    }
      const findingGeners = await Movies_list.find({},projectField)
      const genres = _.uniq(_.flatten(_.map(findingGeners, function(movie){
        if(movie.genres) return movie.genres
      })))

      const responseData = _.map(genres,function(genre){
        let movies= []
        _.forEach(findingGeners,function(moviesData){
          if( _.includes(moviesData.genres,genre)){
            movies.push({ 
              director: moviesData.director,
              imdb_rating: moviesData.imdb_rating,
              length: moviesData.length,
              poster: moviesData.poster,
              title: moviesData.title,
            })
          }
        })
        return{
          "genres":genre,
          movies
        }
        
      })
      
    response.send({responseData});
  } catch (error) {
    console.log(error)
    response.status(500).send(error);
  }
};

exports.deleteMovie = async (request, response) => {  
try {
    await Movies_list.deleteMany()
    response.send({
    "message":'Successfully deleted all data'
    });
} catch (error) {
    response.status(500).send(error);
}
};



// "movies":[
//   {
    //  "director": "Christopher Nolan",
    //      "imdb_rating": 9.0,
    //      "length": "2h 32min",
    //      "poster": "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
    //      "title": "The Dark Knight"
//   },
//   {
//      "director": "Christopher Nolan",
//          "imdb_rating": 9.0,
//          "length": "2h 32min",
//          "poster": "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
//          "title": "The Dark Knight"
//   },
