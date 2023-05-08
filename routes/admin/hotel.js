const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator/check')

isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/users/login')
}



function isAdmin(req, res, next) {
    if (req.user && req.user.role === 'admin') {
      return  next();
    } else {
      req.flash('error', 'You must be an admin to access this page.');
      res.redirect('/login');
    }
  }
  




  


// const hotel = require("../models/ahotelSchema");

const hotelController = require("../../controllers/hotelController");



router.get("/add-new-hotel",isAuthenticated,isAdmin,hotelController.hotel_add);



const multer = require("multer")
// configure multer 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/images/photohotel')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.png') 
    }
  })

  var upload = multer({ storage: storage })



router.post("/",isAuthenticated,isAdmin,[
  // check('name').isLength({min: 5}).withMessage('name_vol should be more than 5 char'),
  // check('type').isLength({min: 5}).withMessage('type should be more than 5 char'),
  // check('city').isLength({min: 5}).withMessage('city should be more than 5 char'),
  // check('address').isLength({min: 5}).withMessage('address should valid Date'),
  // check('distance').isLength({min: 5}).withMessage('distance should valid Date'),
  // check('title').isLength({min: 5}).withMessage('title should valid Date'),
  check('rating').isLength({max: 5}).withMessage('rating should valid Date'),


  // check('desc').isLength({min: 5}).withMessage('desc should valid Date'),



],upload.single('photohotel'),hotelController.hotel_post);


router.get("/",isAuthenticated,isAdmin,hotelController.hotel_index_get );



router.delete("/hotel/:id",isAuthenticated,isAdmin, hotelController.hotel_delete);





router.get("/add-new-room",isAuthenticated,isAdmin,hotelController.room_add);



router.post("/room",isAuthenticated,isAdmin,upload.single('photoroom'),hotelController.room_post);
router.get("/room",isAuthenticated,isAdmin,hotelController.room_index_get );




router.delete("/room/:id",isAuthenticated,isAdmin, hotelController.room_delete);


module.exports = router;
