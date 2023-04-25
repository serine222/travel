const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// define the Schema (the structure of the vol)
const BookTransportSchema = new Schema({
  // id_vol: int,

email: {
    type: String,
    required: true
},
name: {
  type: String,
  required: true
},
Num_tel: {
  type: String,
  required: true
},


transport: {
  type: Schema.Types.ObjectId,
  ref: 'transport'
},

created_at: {
  type: Date,
  required: true
},
  
  });


 
// Create a model based on that schema

const BookTransport = mongoose.model("BookTransport", BookTransportSchema);
 
 // export the model

module.exports = BookTransport ;






