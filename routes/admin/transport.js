const express = require("express");
const router = express.Router();

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
  
  


// const transport = require("../models/atransportSchema");

const transportController = require("../../controllers/transportController");



router.get("/add-new-transport",isAuthenticated,isAdmin,transportController.transport_add);





router.delete("/transport/:id",isAuthenticated,isAdmin, transportController.transport_delete);





module.exports = router;
