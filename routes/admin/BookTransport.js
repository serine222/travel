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
  
  


// const BookTranspor = require("../models/aBookTransporSchema");

const BookTransporController = require("../../controllers/BookTransportController");



router.get("/add-new-BookTranspor",isAuthenticated,isAdmin,BookTransporController.BookTranspor_add);
router.post("/",isAuthenticated,isAdmin,BookTransporController.BookTranspor_post);



router.get("/allBookTranspor",isAuthenticated,isAdmin,BookTransporController.BookTranspor_index_get);

router.get("/BookTranspor/:id",isAuthenticated,isAdmin, BookTransporController.BookTranspor_details_get);



router.delete("/BookTranspor/:id",isAuthenticated,isAdmin, BookTransporController.BookTranspor_delete);





module.exports = router;
