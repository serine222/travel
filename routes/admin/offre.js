const express = require("express");
const router = express.Router();


// const offre = require("../models/aoffreSchema");

const offreController = require("../../controllers/offreController");


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




router.post("/",isAuthenticated,isAdmin, offreController.offre_post);
router.delete("/:id",isAuthenticated,isAdmin, offreController.offre_delete);



module.exports = router;
