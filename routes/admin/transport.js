const express = require("express");
const router = express.Router();
const transportController = require("../../controllers/transportController");
isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/users/login')
}

function isAdmin(req, res, next) {
    if (req.user && req.user.role === 'admin') {
      return  next();
    } else {
      req.flash('error', 'You must be an admin to access this page.');
      res.redirect('/login');
    }
  }


  router.get("/add-new-transport",isAuthenticated,isAdmin,transportController.transport_add);

const multer = require("multer")
// configure multer 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/images/phototransport')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.png') 
    }
  })

  var upload = multer({ storage: storage })




 

router.post("/",isAuthenticated,isAdmin,upload.single('phototransport'),transportController.transport_post);
  
  


// const transport = require("../models/atransportSchema");








router.get("/",isAuthenticated,isAdmin,transportController.transport_index_get );



router.delete("/transport/:id",isAuthenticated,isAdmin, transportController.transport_delete);





module.exports = router;
