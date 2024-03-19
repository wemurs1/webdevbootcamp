const mongoose = require('mongoose');
const cities = require('./cities');
const { descriptors, places } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDb = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: '65f98f982d0d65998093d935',
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: 'https://source.unsplash.com/collection/483251',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas rerum quo dolorum asperiores. Soluta saepe expedita ipsum accusamus necessitatibus sapiente repellendus tenetur dicta, iure, id quos. Fuga, officiis fugiat? aspernatur consequatur amet est maiores enim officiis expedita reiciendis, animi porro itaque officia repudiandae suscipit possimus id libero a alias atque sed! Officiis rerum earum consequuntur cumque magni doloremque?',
      price: price,
    });
    await camp.save();
  }
};

seedDb().then(() => mongoose.connection.close());
