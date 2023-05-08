const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// define the Schema (the structure of the vol)
const hotelSchema = new Schema({
  // id_vol: int,


name: {
  type: String,
  required: true,
},
type: {
  type: String,
  required: true,
},
city: {
  type: String,
  required: true,
},
address: {
  type: String,
  required: true,
},
distance: {
  type: String,
  required: true,
},
photohotel: {
  type: String,
},
title: {
  type: String,
  required: true,
},
desc: {
  type: String,
  required: true,
},
rating: {
  type: Number,
  min: 0,
  max: 5,
},

cheapestPrice: {
  type: Number,
  required: true,
},
featured: {
  type: Boolean,
  default: false,
},

created_at: {
  type: Date,
  required: true
},
  
  });


 
// Create a model based on that schema

const hotel = mongoose.model("hotel", hotelSchema);
 
 // export the model

module.exports = hotel ;








