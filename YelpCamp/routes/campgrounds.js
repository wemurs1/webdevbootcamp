const express = require('express');
const router = express.Router();

const catchAsyc = require('../utils/catchAsync');
require('../schemas');
const { isLoggedIn, validateCampground, isAuthor } = require('../middleware');
const campgrounds = require('../controllers/campgrounds');

router.get('/', catchAsyc(campgrounds.index));

router.get('/new', isLoggedIn, campgrounds.renderNewForm);

router.post(
  '/',
  isLoggedIn,
  validateCampground,
  catchAsyc(campgrounds.createCampground)
);

router.get('/:id', catchAsyc(campgrounds.showCampground));

router.get(
  '/:id/edit',
  isLoggedIn,
  isAuthor,
  catchAsyc(campgrounds.renderEditForm)
);

router.put(
  '/:id',
  isLoggedIn,
  isAuthor,
  validateCampground,
  catchAsyc(campgrounds.editCampground)
);

router.delete(
  '/:id',
  isLoggedIn,
  isAuthor,
  catchAsyc(campgrounds.deleteCampground)
);

module.exports = router;
