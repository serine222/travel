// const users = require("../models/usersSchema");


// article_create_get

const login_get = (req, res) => {
  
  res.render('user/login', { mytitle: "login"});

};


// const users_index_get = (req, res) => {

//   users.find()
//     .then((result) => {
//       res.render("users/users", { mytitle: "users", arrusers: result });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const users_post = (req, res) => {
 


//     let users = new users({
//       title: req.body.title,
//       summary: req.body.summary,
//       bodyl: req.body.body,
//       created_at: Date.now()
//   })

//     // console.log(req.body)
  
//     users
//       .save()
//       .then((result) => {
//         res.redirect("/users");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
// };

// const users_details_get = (req, res) => {
   
//  // result =   object  inside mongo database

//  users.findById(req.params.id)
//  .then((result) => {
//    res.render("users/details", { mytitle: "users DETAILS", objusers: result });
//  })
//  .catch((err) => {
//    console.log(err);
//  });

// };

// const users_delete = (req, res) => {
    
//     users.findByIdAndDelete(req.params.id)

//     .then((params) => {
//       res.json({ mylink: "/users" });
//     })

//     .catch((err) => {
//       console.log(err);
//     });
// };

module.exports = {
    // users_index_get,
    // users_post,
    // users_details_get,
    // users_delete,
    login_get,
};
