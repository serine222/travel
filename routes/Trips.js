const express = require("express");
const router = express.Router();
const Trips = require("../models/aTripsSchema");

// PATH start with '/all-articles'

router.get("/", (req, res) => {
  // res.render("index", { mytitle: "HOME" });

  // result = Array of objects inside mongo database

  Trips.find()
    .then((result) => {
      res.render("Trips/Trips", { mytitle: "Trips", arrTrips: result });
    })
    .catch((err) => {
      console.log(err);
    });
});



router.post("/", (req, res) => {
  const trips = new Trips(req.body);

  // console.log(req.body)

  trips
    .save()
    .then((result) => {
      res.redirect("/Trips");
    })
    .catch((err) => {
      console.log(err);
    });
});



router.get("/:id", (req, res) => {
  // result =   object  inside mongo database

  Trips.findById(req.params.id)
    .then((result) => {
      res.render("Trips/details", { mytitle: "Trips DETAILS", objTrips: result });
    })
    .catch((err) => {
      console.log(err);
    });
});



router.delete("/:id", (req, res) => {
  Trips.findByIdAndDelete(req.params.id)

    .then((params) => {
      res.json({ mylink: "/Trips" });
    })

    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
