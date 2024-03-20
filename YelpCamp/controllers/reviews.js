const Campground = require('../models/campground');
const Review = require('../models/review');

module.exports.createReview = async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  const review = new Review(req.body.review);
  review.author = req.user._id;
  campground.reviews.push(review);
  review.save();
  campground.save();
  req.flash('success', 'Successfully created new review');
  res.redirect(`/campgrounds/${id}`);
};

module.exports.deleteReview = async (req, res) => {
  const { id, reviewid } = req.params;
  await Campground.findByIdAndUpdate(id, {
    $pull: { reviews: reviewid },
  });
  await Review.findByIdAndDelete(reviewid);
  req.flash('success', 'Successfully deleted review');
  res.redirect(`/campgrounds/${id}`);
};
