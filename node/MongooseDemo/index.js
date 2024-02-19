const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/movieDb')
  .then(() => {
    console.log('DB CONNECTION OPEN');
  })
  .catch((error) => {
    console.log('DB CONNECTION FAILED');
    console.log(error);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model('Movie', movieSchema);
// const armedeus = new Movie({
//   title: 'Armedeus',
//   year: 1986,
//   score: 8.2,
//   rating: 'R',
// });

// armedeus.save();

// Movie.insertMany([
//   { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//   { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//   { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//   { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//   { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' },
// ]).then((data) => {
//   console.log(data);
// });
