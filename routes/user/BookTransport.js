const express = require("express");
const router = express.Router();

isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/users/login')
}



// const BookTranspor = require("../models/aBookTransporSchema");

const BookTransporController = require("../../controllers/BookTransportController");


router.get("/",BookTransporController.BookTranspor_user_index_get );
router.post("/",isAuthenticated,BookTransporController.BookTranspor_post );


router.get("/BookTranspor/:id",isAuthenticated, BookTransporController.BookTranspor_details_get);
router.get("/bookUser/:id", BookTransporController.BookTranspor_user_details_get);

router.get("/add-new-BookTranspor",isAuthenticated,BookTransporController.BookTranspor_add);





module.exports = router;
