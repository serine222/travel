const mongoose = require("mongoose");
const Schema = mongoose.Schema;




// define the Schema (the structure of the article)
const aTripsSchema = new Schema(  {

    title: String,
    summary: String,
    body: String,

  }                        );


  // Create a model based on that schema
const Trips = mongoose.model("Trips", aTripsSchema);
  


// export the model
module.exports = Trips;