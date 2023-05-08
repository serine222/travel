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
  
  


// const Bookhotel = require("../models/BookhotelSchema");

const BookhotelController = require("../../controllers/BookhotelController");



router.get("/add-new-Bookhotel",isAuthenticated,isAdmin,BookhotelController.Bookhotel_add);
router.post("/",isAuthenticated,isAdmin,BookhotelController.Bookhotel_post);



router.get("/allBookhotel",isAuthenticated,isAdmin,BookhotelController.Bookhotel_index_get);

router.get("/Bookhotel/:id",isAuthenticated,isAdmin, BookhotelController.Bookhotel_details_get);



router.delete("/Bookhotel/:id",isAuthenticated,isAdmin, BookhotelController.Bookhotel_delete);





module.exports = router;
