const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the voiture)
const voitureSchema = new Schema({
  id_vtr: int,
 pays_vtr: String,
 date_vtr : String,
 date_rest_vtr: String,
 prix_vtr: String,
 cmp_vtr: String,
 
 typ_dmd: String,
 });
 
 
// Create a model based on that schema
const Voiture = mongoose.model("Voiture", voitureSchema);
 
 
