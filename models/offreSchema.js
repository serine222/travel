const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// define the Schema (the structure of the vol)
const offreSchema = new Schema({
  // id_vol: int,
  nom_ofr : {
    type: String,
    required: true
},
ville_dep_ofr : {
    type: String,
    required: true
},
date_dep_ofr: {
    type: String,
    required: true
},
dest_ofr:{
    type: String,
    required: true
},

dure_ofr:{
    type: Number,
    required: true
},


prix_ofr: {
    type: Number,
    required: true
},


photo: {
    type: String,
    required: true
},




created_at: {
  type: Date,
  required: true
},
  // typ_dmd: String,
  });
 
 
// Create a model based on that schema
const offre = mongoose.model("offre", offreSchema);
 
 // export the model
module.exports = offre;



