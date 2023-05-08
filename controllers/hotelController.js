const hotel = require("../models/hotelSchema");
const rooms = require("../models/roomSchema");

const { check, validationResult } = require('express-validator/check');




const room_index_get = async (req, res) => {
 
  try {

    const arrroom = await rooms.find().populate('hotel');

    res.render('hotel/room', {  mytitle: "hotel" ,arrroom });
  } 
  catch (err) {
    console.error(err);

  }



  
};



const hotel_index_get = async (req, res) => {

  hotel.find()
  .then((result) => {

    res.render('hotel/hotel', {  mytitle: "hotel" ,arrhotel : result});
  })
  .catch((err) => {
    console.log(err);
  });
  
};




 


const hotel_add = (req, res) => {
  
 

  hotel.find()
    .then((result) => {
      res.render("hotel/add-new-hotel", { mytitle: "create new hotel", arrroom: result });
    })
    .catch((err) => {
      console.log(err);
    });
   

 
};

const room_add = (req, res) => {
  
 

  hotel.find()
    .then((result) => {
      res.render("hotel/add-new-room", { mytitle: "create new room", arrhotel: result });
    })
    .catch((err) => {
      console.log(err);
    });
   

 
};


const room_post = (req, res) => {
 
  const multer = require("multer")
  // configure multer 

  let room = new rooms ({

    title: req.body.title,
    desc: req.body.desc,
    maxPeople: req.body.maxPeople,
    price: req.body.price,
    photoroom: req.file.filename,
    hotel: req.body.hotel,
    created_at: Date.now()
})


  //  console.log(req.body)

  room
    .save()
    .then((result) => {
      res.redirect("/hotel/room");
    })
    .catch((err) => {
      console.log(err);
    });







    
};











const hotel_post = (req, res) => {
 
  const multer = require("multer")
  // configure multer 
  

  //   let Hotel = new hotel ({
  //   name: req.body.name,
  //   type: req.body.type,
  //   city: req.body.city,
  //   address: req.body.address,
  //   distance: req.body.distance,

  //   photohotel: req.file.filename,
  //   title: req.body.title,
  //   desc: req.body.desc,
  //   rating: req.body.rating,
  //   cheapestprice: req.body.cheapestprice,
  //   featured: req.body.featured,
  //     created_at: Date.now()

  // })


  //   //  console.log(req.body)
  
  //   Hotel
  //     .save()
  //     .then((result) => {
  //       res.redirect("/hotel");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

      const errors = validationResult(req)
      if( !errors.isEmpty()) {
  
      
          req.flash('errors',errors.array())
          res.redirect('/hotel' ) 
  
  
            } else {
  
              let Hotel = new hotel ({
                name: req.body.name,
                type: req.body.type,
                city: req.body.city,
                address: req.body.address,
                distance: req.body.distance,
                photohotel: req.file.filename,
                title: req.body.title,
                desc: req.body.desc,
                rating: req.body.rating,
                cheapestPrice: req.body.cheapestPrice,
                featured: req.body.featured,
                  created_at: Date.now()
            
              })
              Hotel
              .save()
              .then((result) => {
                req.flash('info', ' The event was created successfuly')
                res.redirect('/hotel' );
                //console.log(req.body);
              })
              .catch((err) => {
                console.log(err);
                
              });
            }
  




};

const hotel_details_get = async (req, res) => {


 hotel.findById(req.params.id)
  .then((result) => {
    
    res.render('hotel/details', { mytitle: "hotel details", objhotel: result });

  })
  .catch((err) => {
    console.log(err);
  });
};



const room_details_get = async (req, res) => {

  rooms.findById(req.params.id)
   .then((result) => {
  
     res.render('hotel/details room', { mytitle: "hotel DETAILS", objroom: result});
 
   })
   .catch((err) => {
     console.log(err);
   });


   
 };

const hotel_room_details_get = async (req, res) => {
   
  try {
    const { id } = req.params;
    const arrroom = await rooms.find({ hotel: id }).populate('hotel');

    res.render('hotel/room hotel', { mytitle: "room DETAILS", arrroom: arrroom });
  } catch (err) {
    console.error(err);
   
  }
  
  };




const hotel_delete = (req, res) => {
    
  hotel.findByIdAndDelete(req.params.id)

    .then((params) => {
      res.json({ mylink: "/hotel" });
    })

    .catch((err) => {
      console.log(err);
    });


};


const room_delete = (req, res) => {
    
  rooms.findByIdAndDelete(req.params.id)

    .then((params) => {
      res.json({ mylink: "/hotel" });
    })

    .catch((err) => {
      console.log(err);
    });


};


const get_allhotel = (req, res) => {
    
  hotel.find()
  .then((result) => {
    res.json(arrohotel=result);
  })
  .catch((err) => {
    console.log(err);
  });
};


const get_allroom = (req, res) => {
    
  rooms.find()
  .then((result) => {
    res.json(arrorooms=result);
  })
  .catch((err) => {
    console.log(err);
  });
};

module.exports = {
    hotel_index_get,
    hotel_post,
    hotel_details_get,
    hotel_delete,
    hotel_add,
    get_allhotel,

    hotel_room_details_get,

    get_allroom,
    room_delete,
    room_index_get,
    room_details_get,
    room_post,
    room_add,
};
