const Product = require('./models/product');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/farmStand')
  .then(() => {
    console.log('MONGO CONNECTION OPEN');
  })
  .catch((err) => {
    console.log('MONGO CONNECTION ERROR');
    console.log(err);
  });

// const p = new Product({
//   name: 'Ruby Grapefruit',
//   price: 1.99,
//   category: 'fruit',
// });

// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const seedProducts = [
  {
    name: 'Fairy Eggplant',
    price: 1.0,
    category: 'vegetable',
  },
  {
    name: 'Organic Goddess Melon',
    price: 4.99,
    category: 'fruit',
  },
  {
    name: 'Organic Mini Seedless Watermelon',
    price: 3.99,
    category: 'fruit',
  },
  {
    name: 'Organic Celery',
    price: 1.5,
    category: 'vegetable',
  },
  {
    name: 'Chocolate Whole Milk',
    price: 2.69,
    category: 'dairy',
  },
];

Product.insertMany(seedProducts)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
