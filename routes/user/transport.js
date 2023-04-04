const express = require("express");
const router = express.Router();

isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/users/login')
}



// const transport = require("../models/atransportSchema");

const transportController = require("../../controllers/transportController");


router.get("/",transportController.transport_index_get );
router.get("/transport/:id",isAuthenticated, transportController.transport_details_get);





module.exports = router;
