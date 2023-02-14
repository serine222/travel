const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the vol)
const volSchema = new Schema({
  id_vol: int,
  dest_vol: String,
  date_vol : date,
  catg_billet_vol: String,
  date_rtr_vol: date,
  nbr_per_vol: Entier,
  classe_vol: String,
  prix_vol:Double,
  cmp_vol: String,
  typ_dmd: String,
  });
 
 
// Create a model based on that schema
const Vol = mongoose.model("Vol", volSchema);
 
 
