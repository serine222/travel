const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the offre)
const offreSchema = new Schema({
  id_ofr: int,
  nom_ofr : String,
  ville_dep_ofr : String,
  date_dep_ofr : date,
  dest_ofr: String,
  dure_ofr: Entier,
  prix_ofr:Double,
  photo:Blob,
  typ_dmd: String,
  });
 
 
// Create a model based on that schema
const Offre = mongoose.model("Offre", offreSchema);
 
 
