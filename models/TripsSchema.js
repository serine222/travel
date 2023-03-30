const mongoose = require("mongoose");
const Schema = mongoose.Schema;




// define the Schema (the structure of the article)
const TripsSchema = new Schema(  {

    title: {
      type: String,
      required: true
  },
    summary: {
      type: String,
      required: true
  },

    body: {
      type: String,
      required: true
  },

    created_at: {
      type: Date,
      required: true
  },

  }   );


  // Create a model based on that schema
const Trips = mongoose.model("Trips", TripsSchema
);
  


// export the model
module.exports = Trips;