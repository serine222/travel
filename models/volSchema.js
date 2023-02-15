const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the vol)
const volSchema = new Schema({
  // id_vol: int,
  name_vol: String,
  arrivals_vol : Date,
  email_vol: String,
  leaving_vol: Date,
  phone_vol: Number,
  address_vol: String,
  prix_vol:Number,
  location_vol: String,
  // typ_dmd: String,
  });
 
 
// Create a model based on that schema
const Vol = mongoose.model("Vol", volSchema);
 
 // export the model
module.exports = Vol;



