const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the client)
const clientSchema = new Schema({
  id_cli: int,
 mot_de_passe: String,
  nom_cli : String,
prenom_cli: String,
  adresse_cli : String,
email_cli: String,
  num_tel_cli : String,
sexe_cli: String,
  date_n_cli : String,
validation: String,
});
 
 
// Create a model based on that schema
const client = mongoose.model("client", clientSchema);
 
 
