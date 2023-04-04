const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// define the Schema (the structure of the vol)



  const typ_traSchema = new Schema(  {

 name: {
      type: String,
      required: true
  },

  summary: {
    type: String,
    required: true
},
created_at: {
  type: Date,
  required: true
},
  
  });
 
 
// Create a model based on that schema
const typ_tra = mongoose.model("typ_tra", typ_traSchema);

 // export the model
module.exports = typ_tra;







