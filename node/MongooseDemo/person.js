const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/shopDb')
  .then(() => {
    console.log('DB CONNECTION OPEN');
  })
  .catch((error) => {
    console.log('DB CONNECTION FAILED');
    console.log(error);
  });

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});

personSchema.virtual('fullName').get(function () {
  return `${this.first} ${this.last}`;
});
