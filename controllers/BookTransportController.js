const BookTranspor = require("../models/BookTransportSchema");
const transport = require("../models/transportSchema");




const BookTranspor_index_get = (req, res) => {
 
  transport.find().then((result) => {

    let arrtransport = result;
    BookTranspor.find()
    .then((result) => {
      res.render("BookTransport/BookTransport", { mytitle: "BookTransport", arrBookTranspot: result, arrtransport});
    
    })
    .catch((err) => {
      console.log(err);
    });

  })
  .catch((err) => {
    console.log(err);
  });

};



const BookTranspor_post = (req, res) => {
 


    let BookTranspors = new BookTranspor ({
      email: req.body.email,
      name: req.body.name,
      Num_tel: req.body.Num_tel,
      transport: req.body.transport,
      created_at: Date.now()
  })


    //  console.log(req.body)
  
    BookTranspors
      .save()
      .then((result) => {
        res.redirect("/BookTranspor");
      })
      .catch((err) => {
        console.log(err);
      });
};

const BookTranspor_details_get = (req, res) => {
   




  transport.find() .then((result) => {
    
    let arrtransport = result;
    BookTranspor.findById(req.params.id)
    .then((result) => {

     

      res.render("BookTranspor/details", { mytitle: "transportBookTranspor DETAILS", objBookTranspor: result,arrtransport });
    })
    .catch((err) => {
      console.log(err);
    });
  })
  .catch((err) => {
    console.log(err);
  });
  
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
};
