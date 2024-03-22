const express = require('express');
const router = express.Router();

const catchAsyc = require('../utils/catchAsync');
require('../schemas');
const { isLoggedIn, validateCampground, isAuthor } = require('../middleware');
const campgrounds = require('../controllers/campgrounds');
const { storage } = require('../cloudinary');
const multer = require('multer');
const upload = multer({ storage });

router.get('/new', isLoggedIn, campgrounds.renderNewForm);

router
  .route('/')
  .get(catchAsyc(campgrounds.index))
  .post(
    isLoggedIn,
    upload.array('image'),
    validateCampground,
    catchAsyc(campgrounds.createCampground)
  );

router
  .route('/:id')
  .get(catchAsyc(campgrounds.showCampground))
  .put(
    isLoggedIn,
    isAuthor,
    upload.array('image'),
    validateCampground,
    catchAsyc(campgrounds.editCampground)
  )
  .delete(isLoggedIn, isAuthor, catchAsyc(campgrounds.deleteCampground));

router.get(
  '/:id/edit',
  isLoggedIn,
  isAuthor,
  catchAsyc(campgrounds.renderEditForm)
);

module.exports = router;
