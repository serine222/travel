const BookTranspor = require("../models/BookTransportSchema");
const transport = require("../models/transportSchema");

const typ_tra = require("../models/typ_traSchema");



const BookTranspor_index_get = async (req, res) => {
 
 

  try {
    const arrBookTranspot = await BookTranspor.find().populate('transport');
    res.render('BookTransport/BookTransport', {  mytitle: "BookTransport", arrBookTranspot });
  } 
  catch (err) {
    console.error(err);

  }
  
};



const BookTranspor_user_index_get = async (req, res) => {
 
  
  try {
    const arrBookTranspot = await BookTranspor.find().populate('transport');
    res.render('BookTransport/BookTransport-user', {  mytitle: "BookTransport", arrBookTranspot });
  } 
  catch (err) {
    console.error(err);

  }
};



const BookTranspor_post = (req, res) => {
 


    let BookTranspors = new BookTranspor ({
      email: req.body.email,
      name: req.body.name,
      Num_tel: req.body.Num_tel,
     
      user_id:  req.user.id,
      transport: req.body.transport,
      created_at: Date.now()
  })


    //  console.log(req.body)
  
    BookTranspors
      .save()
      .then((result) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
};

const BookTranspor_details_get = async (req, res) => {
   




  // transport.find() .then((result) => {
    
try {
  const { id } = req.params;
  const objBookTranspor = await BookTranspor.findOne({ _id: id }).populate('transport').populate({ path: 'transport', populate: { path: 'typ_tra' } });
  res.render('BookTransport/details', { mytitle: "BookTranspor details", objBookTranspor });
} catch (err) {
  console.error(err);
 
}
};


const BookTranspor_user_details_get = async (req, res) => {
  

  // transport.find() .then((result) => {


try {
  const { id } = req.params;
  const objtransport = await transport.find({ _id: id }).populate('typ_tra');
  res.render('BookTransport/add-new-BookTransport-user', { mytitle: "BookTranspor details", objtransport: objtransport[0] });
} catch (err) {
  console.error(err);
 
}


  
  
  };






const BookTranspor_delete = (req, res) => {
    
  BookTranspor.findByIdAndDelete(req.params.id)

    .then((params) => {
      res.json({ mylink: "/transport" });
    })

    .catch((err) => {
      console.log(err);
    });


};
const  BookTranspor_add = (req, res) => {
  
 

  transport.find()
  .then((result) => {
    res.render("BookTransport/add-new-BookTransport", { mytitle: "create new transport", arrtransport: result });
  })
  .catch((err) => {
    console.log(err);
  });
 


};
module.exports = {
  BookTranspor_index_get,
  BookTranspor_post,
  BookTranspor_details_get,
  BookTranspor_delete,
  BookTranspor_add,
  BookTranspor_user_index_get,

  BookTranspor_user_details_get,
};
