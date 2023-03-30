const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// define the Schema (the structure of the vol)
const transportSchema = new Schema({
  // id_vol: int,

  date_tra: {
    type: String,
    required: true
},
date_rest_tra : {
    type:  Date,
    required: true
},
prix_tra: {
    type: Number,
    required: true
},
cmp_tra:{
    type:  Date,
    required: true
},

typ_tra: {
  type: Schema.Types.ObjectId,
  ref: 'typ_tra'
},
created_at: {
  type: Date,
  required: true
},
  
  });


 
// Create a model based on that schema

const transport = mongoose.model("transport", transportSchema);
 
 // export the model

module.exports = transport ;






