const express = require("express");
const router = express.Router();


// const offre = require("../models/aoffreSchema");

const offreController = require("../../controllers/OffreController");


isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/users/login')
}


router.get("/",offreController.offre_index_get );
router.get("/all-offre",offreController.get_allOffre );

router.get("/:id", offreController.offre_details_get);

module.exports = router;
