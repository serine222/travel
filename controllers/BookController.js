const Vol = require("../models/volSchema");


// article_create_get

const Book_index_get = (req, res) => {

    // Trips.find()
    // .then((result) => {
    //   res.render("Trips/Trips", { mytitle: "Trips", arrTrips: result });
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
    res.render("book/book",{mytitle: "book"})
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
 
    const vol= new Vol(req.body);
    vol
    .save()
    .then((result) => {
      res.redirect("/home");
      console.log(req.body);
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
