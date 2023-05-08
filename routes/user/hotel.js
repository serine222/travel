const express = require("express");
const router = express.Router();

isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/users/login')
}




const hotelController = require("../../controllers/hotelController");


router.get("/",hotelController.hotel_index_get );
router.get("/hotel/:id", hotelController.hotel_details_get);

router.get("/all-hotel",hotelController.get_allhotel);

router.get("/room",hotelController.room_index_get );
router.get("/room/:id", hotelController.room_details_get);

router.get("/all-room",hotelController.get_allroom);


router.get("/hoteroom/:id",hotelController.hotel_room_details_get);



module.exports = router;
