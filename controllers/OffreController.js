const offre = require("../models/offreSchema");


// article_create_get

const offre_index_get = (req, res) => {

  offre.find()
    .then((result) => {
      res.render("offre/offre", { mytitle: "offre", arroffre: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const offre_post = (req, res) => {
 

    let offres = new offre({
      
    
    nom_ofr : req.body.nom_ofr,
    ville_dep_ofr : req.body.ville_dep_ofr,
    date_dep_ofr:  req.body.date_dep_ofr,
    dest_ofr: req.body.dest_ofr,
    dure_ofr: req.body.dure_ofr,
    prix_ofr:  req.body.prix_ofr,
    photo: req.body.photo,
    
    
    created_at:  Date.now()

  })

  // console.log(req.body)
  
    offres
      .save()
      .then((result) => {
        res.redirect("/offre");
      })
      .catch((err) => {
        console.log(err);
      });
};

const offre_details_get = (req, res) => {
   
 // result =   object  inside mongo database

 offre.findById(req.params.id)
 .then((result) => {
   res.render("offre/details", { mytitle: "offre DETAILS", objoffre: result });
 })
 .catch((err) => {
   console.log(err);
 });

};

const offre_delete = (req, res) => {
    
    offre.findByIdAndDelete(req.params.id)

    .then((params) => {
      res.json({ mylink: "/offre" });
    })

    .catch((err) => {
      console.log(err);
    });
};

const git_allOffre = (req, res) => {
    
  offre.find()
  .then((result) => {
    res.json(arroffre=result);
  })
  .catch((err) => {
    console.log(err);
  });
};

module.exports = {
    offre_index_get,
    offre_post,
    offre_details_get,
    offre_delete,
    git_allOffre
};
