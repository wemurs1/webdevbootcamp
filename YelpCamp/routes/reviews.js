const express = require('express');
const router = express.Router({ mergeParams: true });

const catchAsyc = require('../utils/catchAsync');
const Campground = require('../models/campground');
const Review = require('../models/review');
const reviews = require('../controllers/reviews');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');
require('../schemas');

router.post('/', isLoggedIn, validateReview, catchAsyc(reviews.createReview));

router.delete(
  '/:reviewid',
  isLoggedIn,
  isReviewAuthor,
  catchAsyc(reviews.deleteReview)
);

module.exports = router;
