const Bookhotel= require("../models/BookhotelSchema");
const hotel = require("../models/hotelSchema");

const room = require("../models/roomSchema");



const Bookhotel_index_get = async (req, res) => {
 
 

  try {
    const arrBookhotel = await Bookhotel.find().populate('room');
    res.render('Bookhotel/Bookhotel', {  mytitle: "Bookhotel", arrBookhotel });
  } 
  catch (err) {
    console.error(err);

  }
  
};



const Bookhotel_user_index_get = async (req, res) => {
 
  
  try {
    const arrBookhotel = await Bookhotel.find().populate('room');
    res.render('Bookhotel/Bookhotel-user', {  mytitle: "Bookhotel", arrBookhotel });
  } 
  catch (err) {
    console.error(err);

  }

  


  
};



const Bookhotel_post = (req, res) => {
 


    let bookhotel = new Bookhotel({
      email: req.body.email,
      name: req.body.name,
      Num_tel: req.body.Num_tel,
     
      user_id:  req.user.id,
      room: req.body.room,
      created_at: Date.now()
  })


    //  console.log(req.body)
  
    bookhotel
      .save()
      .then((result) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
};

const Bookhotel_details_get = async (req, res) => {
   
  // hotel.find() .then((result) => {
    
try {
  const { id } = req.params;
  const objBookhotel= await Bookhotel.findOne({ _id: id }).populate('room').populate({ path: 'room', populate: { path: 'hotel' } });
  res.render('Bookhotel/details', { mytitle: "Bookhoteldetails", objBookhotel});
} catch (err) {
  console.error(err);
 
}

  
};


const Bookhotel_user_details_get = async (req, res) => {
  

  // hotel.find() .then((result) => {


try {
  const { id } = req.params;
  const objroom = await room.find({ _id: id }).populate('hotel');
  res.render('Bookhotel/add-new-Bookhotel-user', { mytitle: "Bookhoteldetails", objroom: objroom[0] });
} catch (err) {
  console.error(err);
 
}
  };






const Bookhotel_delete = (req, res) => {
    
  Bookhotel.findByIdAndDelete(req.params.id)

    .then((params) => {
      res.json({ mylink: "Bookhotel/" });
    })

    .catch((err) => {
      console.log(err);
    });


};
const  Bookhotel_add = (req, res) => {
  
 

  room.find()
  .then((result) => {
    res.render("Bookhotel/add-new-Bookhotel", { mytitle: "create new hotel", arrroom: result });
  })
  .catch((err) => {
    console.log(err);
  });
 


};
module.exports = {
  Bookhotel_index_get,
  Bookhotel_post,
  Bookhotel_details_get,
  Bookhotel_delete,
  Bookhotel_add,
  Bookhotel_user_index_get,
  Bookhotel_user_details_get,
};
