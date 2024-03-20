const express = require('express');
const router = express.Router({ mergeParams: true });

const catchAsyc = require('../utils/catchAsync');
const Campground = require('../models/campground');
const Review = require('../models/review');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');
require('../schemas');

router.post(
  '/',
  isLoggedIn,
  validateReview,
  catchAsyc(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    campground.reviews.push(review);
    review.save();
    campground.save();
    req.flash('success', 'Successfully created new review');
    res.redirect(`/campgrounds/${id}`);
  })
);

router.delete(
  '/:reviewid',
  isLoggedIn,
  isReviewAuthor,
  catchAsyc(async (req, res) => {
    const { id, reviewid } = req.params;
    await Campground.findByIdAndUpdate(id, {
      $pull: { reviews: reviewid },
    });
    await Review.findByIdAndDelete(reviewid);
    req.flash('success', 'Successfully deleted review');
    res.redirect(`/campgrounds/${id}`);
  })
);

module.exports = router;
