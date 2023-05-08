const express = require("express");
const router = express.Router();

isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/users/login')
}



// const Bookhotel = require("../models/aBookhotelSchema");

const BookhotelController = require("../../controllers/BookhotelController");


router.get("/",BookhotelController.Bookhotel_user_index_get );
router.post("/",isAuthenticated,BookhotelController.Bookhotel_post );


router.get("/Bookhotel/:id",isAuthenticated, BookhotelController.Bookhotel_details_get);
router.get("/bookUser/:id", BookhotelController.Bookhotel_user_details_get);

router.get("/add-new-Bookhotel",isAuthenticated,BookhotelController.Bookhotel_add);





module.exports = router;
