const express = require("express");
const router = express.Router();
// const Trips = require("../models/aTripsSchema");

const TripsController = require("../controllers/TripsController");


router.get("/",TripsController.Trips_index_get );



router.post("/", TripsController.Trips_post);



router.get("/:id", TripsController.Trips_details_get);



router.delete("/:id", TripsController.Trips_delete);

module.exports = router;
