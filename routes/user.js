
const express = require("express");
const router = express.Router();
const passport = require('passport');

const User = require("../models/UserSchema");

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

// const usersController = require("../controllers/usersController");
router.get("/", (req, res) => {
    res.redirect("/users/login")
  });

// router.get("/login",usersController.login_get );



// router.post("/", usersController.users_post);



// router.get("/:id", usersController.users_details_get);



// router.delete("/:id", usersController.users_delete);


router.get('/login', (req,res)=> {
   
    res.render('user/login', { mytitle: "login",error: req.flash('error')});
});

// login post request 
router.post('/login',
  passport.authenticate('local.login', {
    successRedirect: '/users/profile',
      failureRedirect: '/users/login',
      failureFlash: true })
      )

// sign up form 
router.get('/signup', (req,res)=> {
    res.render('user/signup', { mytitle: "signup",error: req.flash('error')});
});

// sign up post request


router.post('/signup',
  passport.authenticate('local.signup', {
    successRedirect: '/users/profile',
      failureRedirect: '/users/signup',
      failureFlash: true })
      );



// router.get('/profile',isAuthenticated, (req,res)=> {

//     res.render('user/profile', {mytitle: "profile",
//         success: req.flash('success')
//     });
// });



router.get('/profile',isAuthenticated, isAdmin, (req,res)=> {

  res.render('user/profile', {mytitle: "profile",
      success: req.flash('success')
  });
});

// logout user

router.get('/logout', (req,res)=> {


    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/users/login');
    });
});






module.exports = router;
