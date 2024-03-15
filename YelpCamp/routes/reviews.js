const express = require('express');
const router = express.Router({ mergeParams: true });

const catchAsyc = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campground');
const Review = require('../models/review');
const { reviewSchema } = require('../schemas');

const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(',');
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

router.post(
  '/',
  validateReview,
  catchAsyc(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    review.save();
    campground.save();
    req.flash('success', 'Successfully created new review');
    res.redirect(`/campgrounds/${id}`);
  })
);

router.delete(
  '/:reviewid',
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
