const express = require("express");
const router = express.Router();


// const transport = require("../models/atransportSchema");

const transportController = require("../controllers/transportController");


router.get("/",transportController.transport_index_get );



router.get("/add-new-transport",transportController.transport_add);

router.post("/", transportController.transport_post);



router.get("/transport/:id", transportController.transport_details_get);



router.delete("/transport/:id", transportController.transport_delete);





module.exports = router;
