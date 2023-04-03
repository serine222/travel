const express = require("express");
const router = express.Router();

isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/users/login')
}



// const transport = require("../models/atransportSchema");

const transportController = require("../controllers/transportController");


router.get("/",transportController.transport_index_get );



router.get("/add-new-transport",isAuthenticated,transportController.transport_add);

router.post("/",isAuthenticated, transportController.transport_post);



router.get("/transport/:id",isAuthenticated, transportController.transport_details_get);



router.delete("/transport/:id",isAuthenticated, transportController.transport_delete);





module.exports = router;
