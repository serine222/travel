const transport = require("../models/transportSchema");
const typ_tra = require("../models/typ_traSchema");


// article_create_get

const transport_index_get = (req, res) => {
  typ_tra.find() .then((result) => {

    let arrtyp_tra = result;
    transport.find()
    .then((result) => {
      // res.render("transport/transport", { mytitle: "transport", arrtransport: result,arrtyp_tra });
      console.log("arrtransport: result");
    })
    .catch((err) => {
      console.log(err);
    });

  })
  .catch((err) => {
    console.log(err);
  });

 
};

const transport_add = (req, res) => {
  
 

    typ_tra.find()
    .then((result) => {
      res.render("transport/add-new-transport", { mytitle: "create new transport", arrtyp_tra: result });
    })
    .catch((err) => {
      console.log(err);
    });
   

 
};


const transport_post = (req, res) => {
 


    let transports = new transport ({
      date_tra: req.body.date_tra,
    date_rest_tra: req.body.date_rest_tra,
    dure_ofr: req.body.dure_ofr,
    prix_tra: req.body.prix_tra,
    cmp_tra: req.body.cmp_tra,
    typ_tra: req.body.typ_tra,
      created_at: Date.now()
  })


    //  console.log(req.body)
  
    transports
      .save()
      .then((result) => {
        res.redirect("/transport");
      })
      .catch((err) => {
        console.log(err);
      });
};

const transport_details_get = (req, res) => {
   


 typ_tra.find() .then((result) => {
    
  let arrtyp_tra = result;
  transport.findById(req.params.id)
  .then((result) => {
    res.render("transport/details", { mytitle: "transport DETAILS", objtransport: result,arrtyp_tra });
  })
  .catch((err) => {
    console.log(err);
  });
})
.catch((err) => {
  console.log(err);
});

};

const transport_delete = (req, res) => {
    
    transport.findByIdAndDelete(req.params.id)

    .then((params) => {
      res.json({ mylink: "/transport" });
    })

    .catch((err) => {
      console.log(err);
    });


};

module.exports = {
    transport_index_get,
    transport_post,
    transport_details_get,
    transport_delete,
    transport_add,
};
