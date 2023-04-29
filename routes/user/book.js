const express = require("express");
const router = express.Router();
// const Vol = require("../models/volSchema");
const { check, validationResult } = require('express-validator/check');

const BookController = require("../../controllers/BookController");


isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/users/login')
};



router.get("/",BookController.Book_index_get);

 router.get("/Book/:id", BookController.offre_details_get);

router.get("/Book",isAuthenticated, BookController.Book_index_get);


router.post("/",isAuthenticated,[
    check('name_vol').isLength({min: 5}).withMessage('name_vol should be more than 5 char'),
    check('email_vol').isLength({min: 5}).withMessage('email_vol should be more than 5 char'),
    check('phone_vol').isLength({min: 5}).withMessage('phone_vol should be more than 5 char'),
    check('address_vol').isLength({min: 5}).withMessage('address_vol should valid Date'),
    check('location_vol').isLength({min: 5}).withMessage('location_vol should valid Date'),
    check('prix_vol').isLength({min: 5}).withMessage('prix_vol should valid Date'),
    
    check('leaving_vol').isLength({min: 5}).withMessage('leaving_vol should valid Date'),



], BookController.Book_post);


router.get("/:id",isAuthenticated, BookController.Book_details_get);

router.get("/user/all",isAuthenticated, BookController.Book_user_all_get);


router.delete("/:id",isAuthenticated, BookController.Book_delete);


module.exports = router;
