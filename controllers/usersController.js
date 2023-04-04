// const users = require("../models/usersSchema");
const User = require("../models/UserSchema");


const users_login = (req, res) => {
  res.render('user/login', { mytitle: "login",error: req.flash('error')});
}
const users_signup = (req, res) => {

  res.render('user/signup', { mytitle: "signup",error: req.flash('error')});
};
const users_profile = (req, res) => {
    
  res.render('user/profile', {mytitle: "profile",
  success: req.flash('success')
});
};
const users_logout = (req, res) => {
    
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/users/login');
});

};
const users_delete = (req, res) => {
    
  User.findByIdAndDelete(req.params.id)

    .then((params) => {
      res.json({ mylink: "/users" });
    })

    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
    users_logout,
    users_profile,
    users_signup,
    users_login
   
};
