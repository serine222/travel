const express = require("express");
const router = express.Router();


isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/users/login')
}



router.get("/", (req, res) => {
    res.redirect("/add-new-Trips")
  });

const TripsController = require("../../controllers/TripsController");





router.post("/",isAuthenticated, TripsController.Trips_post);



router.get("/:id",isAuthenticated, TripsController.Trips_details_get);







module.exports = router;
