const express = require("express");
const router = express.Router();


isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/users/login')
}




const TripsController = require("../controllers/TripsController");


router.get("/",isAuthenticated,TripsController.Trips_index_get );



router.post("/",isAuthenticated, TripsController.Trips_post);



router.get("/:id",isAuthenticated, TripsController.Trips_details_get);



router.delete("/:id",isAuthenticated, TripsController.Trips_delete);



module.exports = router;
