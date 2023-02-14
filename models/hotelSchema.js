const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the hotel)
const hotelSchema = new Schema({
  id_hot: int,
 adr_hot: String,
 nom_hot: String,
 catg_hot: String,
 date_hot : date,
 
 nbr_per_hot: Entier,
 dure_hot: Entier,
 
 prix_hot:Double,
 typ_dmd: String,
 
 });
 
 
// Create a model based on that schema
const Hotel = mongoose.model("Hotel", hotelSchema);
 
 
