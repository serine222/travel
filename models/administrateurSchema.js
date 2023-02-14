const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the administrateur)
const administrateurSchema = new Schema({
 id_adm: int,
 nom_adm: String,
  prenom_adm : String,
});
 
// Create a model based on that schema
const Administrateur = mongoose.model("administrateur", administrateurSchema);
 
 
