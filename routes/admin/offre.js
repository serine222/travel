const express = require("express");
const router = express.Router();




  

const offreController = require("../../controllers/OffreController");


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

  
  const multer = require("multer")
  // configure multer 
  var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'uploads/images')
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.png') 
      }
    })
  
    var upload = multer({ storage: storage })


router.post("/",isAuthenticated,isAdmin,upload.single('photo'), offreController.offre_post);

router.delete("/:id",isAuthenticated,isAdmin, offreController.offre_delete);





module.exports = router;
