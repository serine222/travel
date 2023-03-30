const Vol = require("../models/volSchema");
const Trips = require("../models/TripsSchema");



// article_create_get

const Book_index_get = (req, res) => {

    Trips.find()
    .then((result) => {
      res.render("book/book", { mytitle: "book", arrTrips: result });
    })
    .catch((err) => {
      console.log(err);
    });
   

    //  res.render("book/book",{mytitle: "book", arrTrips: result})


};

const Book_all_get = (req, res) => {
    
    

    Vol.find()
    .then((result) => {
      res.render("book/all-Book", { mytitle: "all-Book", arrBooks: result });
    })
    .catch((err) => {
      console.log(err);
    });
   
};


const Book_post = (req, res) => {
 
    // const vol= new Vol(req.body
    // );

    let vol = new Vol({
      name_vol: req.body.name_vol,
      email_vol: req.body.email_vol,
      phone_vol: req.body.phone_vol,
      address_vol: req.body.address_vol,
      email_vol: req.body.email_vol,
      location_vol: req.body.location_vol,

      prix_vol: req.body.prix_vol,
      arrivals_vol: req.body.arrivals_vol,

      leaving_vol:  req.body.leaving_vol,
      Trips:  req.body.Trips,
      created_at: Date.now()
  })
    vol
    .save()
    .then((result) => {
      res.redirect("/home");
      //console.log(req.body);
    })
    .catch((err) => {
      console.log(err);
      
    });
};

const Book_details_get = (req, res) => {
   
 // result =   object  inside mongo database

 vol.findById(req.params.id)
 .then((result) => {
   res.render("book/details", { mytitle: "Book DETAILS", objBook: result });
 })
 .catch((err) => {
   console.log(err);
 });

};

const Book_delete = (req, res) => {
    
    vol.findByIdAndDelete(req.params.id)

    .then((params) => {
      res.json({ mylink: "/all-Book" });
    })

    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
    Book_index_get,
    Book_post,
    Book_details_get,
    Book_delete,
    Book_all_get,
    
};
