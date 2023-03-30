const express = require("express");
const router = express.Router();


// const offre = require("../models/aoffreSchema");

const offreController = require("../controllers/offreController");


router.get("/",offreController.offre_index_get );



router.post("/", offreController.offre_post);



router.get("/:id", offreController.offre_details_get);



router.delete("/:id", offreController.offre_delete);



module.exports = router;
