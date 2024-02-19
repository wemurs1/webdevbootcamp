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

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  categories: [String],
  size: {
    type: String,
    enum: ['S', 'M', 'L'],
  },
});

productSchema.methods.greet = function () {
  console.log('Hi');
};

const Product = mongoose.model('Product', productSchema);

const bike = new Product({
  name: 'Mountain Bike',
  price: 599,
  categories: ['cycling', 'safety'],
  size: 'M',
});

bike
  .save()
  .then((data) => {
    console.log('It Worked');
    console.log(data);
  })
  .catch((error) => {
    console.log('Error');
    console.log(error.errors.name.properties.message);
  });
