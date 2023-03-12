const express = require("express");
const router = express.Router();
const Vol = require("../models/volSchema");

router.get("/", (req, res) => {
  res.render("book",{mytitle: "book"})
});







router.post("/", (req, res) => {
  
  const vol= new Vol(req.body);
  vol
  .save()
  .then((result) => {
    res.redirect("/home");
    console.log(req.body);
  })
  .catch((err) => {
    console.log(err);
    
  });
});

module.exports = router;
