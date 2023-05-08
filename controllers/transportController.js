const transport = require("../models/transportSchema");
const typ_tra = require("../models/typ_traSchema");





const transport_index_get = async (req, res) => {
 
  try {

    const arrtransport = await transport.find().populate('typ_tra');

    res.render('transport/transport', {  mytitle: "transport" ,arrtransport });
  } 
  catch (err) {
    console.error(err);

  }
  
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
    phototransport: req.file.filename,
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

const transport_details_get = async (req, res) => {
   





try {
  const { id } = req.params;
  const objtransport = await transport.find({ _id: id }).populate('typ_tra');
  res.render('transport/details', { mytitle: "transport DETAILS", objtransport: objtransport[0] });
} catch (err) {
  console.error(err);
 
}





};


const get_alltransport = async (req, res) => {
    
 

  try {

    const arrtransport = await transport.find().populate('typ_tra');

  
    res.json(arrtransport);
  } 
  catch (err) {
    console.error(err);

  }



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
    get_alltransport,
};
