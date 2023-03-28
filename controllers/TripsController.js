const Trips = require("../models/aTripsSchema");


// article_create_get

const Trips_index_get = (req, res) => {

  Trips.find()
    .then((result) => {
      res.render("Trips/Trips", { mytitle: "Trips", arrTrips: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const Trips_post = (req, res) => {
 
    const trips = new Trips(req.body);

    let vol = new Vol({
      title: req.body.title,
      summary: req.body.summary,
      bodyl: req.body.body,
      created_at: Date.now()
  })

    // console.log(req.body)
  
    trips
      .save()
      .then((result) => {
        res.redirect("/Trips");
      })
      .catch((err) => {
        console.log(err);
      });
};

const Trips_details_get = (req, res) => {
   
 // result =   object  inside mongo database

 Trips.findById(req.params.id)
 .then((result) => {
   res.render("Trips/details", { mytitle: "Trips DETAILS", objTrips: result });
 })
 .catch((err) => {
   console.log(err);
 });

};

const Trips_delete = (req, res) => {
    
    Trips.findByIdAndDelete(req.params.id)

    .then((params) => {
      res.json({ mylink: "/Trips" });
    })

    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
    Trips_index_get,
    Trips_post,
    Trips_details_get,
    Trips_delete,
};
