const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the sejour)
const sejourSchema = new Schema({
  id_sej: int,
  id_hot: String,
  id_vol: String,
  id_train : String,
  id_crs: String,
  guide: String,
  typ_dmd: String,
  });
 
 
// Create a model based on that schema
const Sejour = mongoose.model("Sejour", sejourSchema);
 
 
