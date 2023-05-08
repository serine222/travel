const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// define the Schema (the structure of the vol)



  const roomSchema = new Schema(  {


  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  
photoroom: {
  type: String,
  required: true
},
  
hotel: {
  type: Schema.Types.ObjectId,
  ref: 'hotel'
},
created_at: {
  type: Date,
  required: true
},
  
  });
 
 
// Create a model based on that schema
const room = mongoose.model("room", roomSchema);

 // export the model
module.exports = room;







