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

const TripsController = require("../../controllers/TripsController");


router.get("/allTrips",isAuthenticated,isAdmin,TripsController.Trips_index_get );
router.delete("/:id",isAuthenticated,isAdmin, TripsController.Trips_delete);



module.exports = router;
