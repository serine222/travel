const Vol = require("../models/volSchema");
const offre = require("../models/offreSchema");
const { check, validationResult } = require('express-validator/check');


// article_create_get

const Book_index_get = (req, res) => {

  offre.find()
    .then((result) => {
      res.render("book/book", { mytitle: "book", arroffre: result,errors: req.flash('errors'), message: req.flash('info')  });
    })
    .catch((err) => {
      console.log(err);
    });
   

    //  res.render("book/book",{mytitle: "book", arrTrips: result})


};

const Book_all_get = (req, res) => {
    

    Vol.find()
    .then((result) => {
      res.render("book/all-Book", { mytitle: "all-Book", arrBooks: result , message: req.flash('info') });
      

    })
    .catch((err) => {
      console.log(err);
    });
   
};

const Book_user_all_get = (req, res) => {
    

  Vol.find()
  .then((result) => {
    res.render("book/all-Book-user", { mytitle: "all-Book", arrBooks: result });
    

  })
  .catch((err) => {
    console.log(err);
  });
 
};


const Book_post = (req, res) => {
 
   
    const errors = validationResult(req)
    if( !errors.isEmpty()) {

      Vol.find()
      .then((result) => {
        req.flash('errors',errors.array())
        res.redirect('book/book' ) });


          } else {

            let vol = new Vol({
              name_vol: req.body.name_vol,
              email_vol: req.body.email_vol,
              phone_vol: req.body.phone_vol,
              address_vol: req.body.address_vol,
              location_vol: req.body.location_vol,
        
              prix_vol: req.body.prix_vol,
              arrivals_vol: req.body.arrivals_vol,
              user_id:  req.user.id,
              leaving_vol:  req.body.leaving_vol,
              offre:  req.body.offre,
              created_at: Date.now()
          })
          vol
            .save()
            .then((result) => {
              req.flash('info', ' The event was created successfuly')
              res.redirect('book/book' );
              //console.log(req.body);
            })
            .catch((err) => {
              console.log(err);
              
            });
          }


};

const Book_details_get = (req, res) => {
   
 // result =   object  inside mongo database

 Vol.findById(req.params.id)
 .then((result) => {
   res.render("book/details", { mytitle: "Book DETAILS", objBook: result });
 })
 .catch((err) => {
   console.log(err);
 });

};


const offre_details_get = (req, res) => {
   
  // result =   object  inside mongo database
 
  offre.findById(req.params.id)
  .then((result) => {
    res.render("book/bookOffer", { mytitle: "Book", objoffre: result });
  })
  .catch((err) => {
    console.log(err);
  });

 };

const Book_delete = (req, res) => {
    
  Vol.findByIdAndDelete(req.params.id)

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
    Book_user_all_get,
    offre_details_get,
    
};
