const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the vol)
const volSchema = new Schema({
  // id_vol: int,
  name_vol: {
    type: String,
    required: true
},
  arrivals_vol : {
    type:  Date,
    required: true
},
  email_vol: {
    type: String,
    required: true
},
  leaving_vol:{
    type:  Date,
    required: true
},

  phone_vol:{
    type: Number,
    required: true
},

  address_vol: {
    type: String,
    required: true
},
  prix_vol: {
    type: Number,
    required: true
},


  location_vol: {
    type: String,
    required: true
},

user_id : {
  type: String,
  required: true
},

Trips: {
  type: Schema.Types.ObjectId,
  ref: 'Trips'
},
created_at: {
  type: Date,
  required: true
},
  // typ_dmd: String,
  });
 
 
// Create a model based on that schema
const Vol = mongoose.model("Vol", volSchema);
 
 // export the model
module.exports = Vol;



