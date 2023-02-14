const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the Croisiere)
const croisiereSchema = new Schema({
  id_crs: int,
  dest_crs: String,
  date_crs : date,
  prix_crs:Double,
  nbr_per_crs: Entier,
  port_crs: String,
  cmp_crs : String,
  typ_dmd: String,
  
  });
 
 
// Create a model based on that schema
const Croisiere = mongoose.model("Croisiere", croisiereSchema);
 
 
