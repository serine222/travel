const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// define the Schema (the structure of the vol)
const BookhotelSchema = new Schema({
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
user_id : {
  type: String,
  required: true
  
},

room: {
  type: Schema.Types.ObjectId,
  ref: 'room'
},

created_at: {
  type: Date,
  required: true
},
  
  });


 
// Create a model based on that schema

const Bookhotel = mongoose.model("Bookhotel", BookhotelSchema);
 
 // export the model

module.exports = Bookhotel ;






