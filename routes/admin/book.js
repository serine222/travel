const express = require("express");
const router = express.Router();
// const Vol = require("../models/volSchema");
const { check, validationResult } = require('express-validator/check');

const BookController = require("../../controllers/BookController");


isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/users/login')
};

function isAdmin(req, res, next) {
    if (req.user && req.user.role === 'admin') {
      return next();
    } else {
      req.flash('error', 'You must be an admin to access this page.');
      res.redirect('/login');
    }
  };



router.get("/all-Book",isAuthenticated,isAdmin, BookController.Book_all_get);




module.exports = router;
