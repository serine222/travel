const express = require("express");
const router = express.Router();


const offreController = require("../../controllers/OffreController");



router.get("/",offreController.get_Offre );




module.exports = router;
