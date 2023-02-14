const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the BilletTrain)
const billetTrainSchema = new Schema({
  id_train: int,
  dest_train: String,
  date_train: date,
  prix_train:Double,
  nbr_per_train: Entier,
  catg_billet_train: String,
  cmp_train: String,
  typ_dmd: String,
  });
 
 
// Create a model based on that schema
const BilletTrain = mongoose.model("BilletTrain", billetTrainSchema);
 
 
