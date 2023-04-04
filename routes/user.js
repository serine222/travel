
const express = require("express");
const router = express.Router();
const passport = require('passport');

// const passport = require('passport');

const User = require("../models/UserSchema");
const usersController = require("../controllers/usersController");

function isAdmin(req, res, next) {
  if (req.user && req.user.role === 'admin') {
    return  next();
  } else {
    req.flash('error', 'You must be an admin to access this page.');
    res.redirect('/login');
  }
}


isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/users/login')
};


router.get("/", (req, res) => {
    res.redirect("/users/login")
  });


router.get('/login',usersController.users_login);
// login post request 

router.post('/login',  
passport.authenticate('local.login', {
  successRedirect: '/users/profile',
    failureRedirect: '/users/login',
    failureFlash: true 
  }) 
    );


// sign up form 
router.get('/signup',usersController.users_signup);
// sign up post request

router.post('/signup',
 passport.authenticate('local.signup', {
  successRedirect: '/users/profile',
    failureRedirect: '/users/signup',
    failureFlash: true }));

// sign up post profile
router.get('/profile',isAuthenticated,usersController.users_profile);

// logout user
router.get('/logout',usersController.users_logout);






module.exports = router;
