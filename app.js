//  to controll ur website

const express = require("express");
const app = express();
const port = 5000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('uploads'))

const db = require('./config/database');
const session = require('express-session');
const flash = require('connect-flash');

app.use(express.urlencoded({ extended: true }));

// Router admin
const adminbookRouter = require("./routes/admin/book");
const adminTripsRouter = require("./routes/admin/Trips");
const adminoffreRouter = require("./routes/admin/offre");
const admintransportRouter = require("./routes/admin/transport");

// Router user

const userbookRouter = require("./routes/user/book");
const userTripsRouter = require("./routes/user/Trips");
const useroffreRouter = require("./routes/user/offre");
const usertransportRouter = require("./routes/user/transport");


const userRouter = require("./routes/user");
const passport = require('passport');
const passportSetup = require('./config/passport-setup');




// session and flash config .
app.use(session({
  secret: 'lorem ipsum',
  resave: false,
  saveUninitialized: false,
  cookie:{_expires : 60000000},
}));


app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//store user object 

app.get('*', (req,res,next)=> {
  res.locals.user = req.user || null
  next();
});

isAuthenticated = (req,res,next) => {
  if (req.isAuthenticated()) return next()
  res.redirect('/users/login')
};

function isAdmin(req, res, next) {
  if (req.user && req.user.role === 'admin') {
    return  next();
  } else {
    req.flash('error', 'You must be an admin to access this page.');
    res.redirect('/users/login');
  }
}

app.get('/admin/home', isAuthenticated, isAdmin, function(req, res) {
  // Code to display admin dashboard goes here
  res.render("home",{mytitle: "HOME"})
});



// router

app.get("/", (req, res) => {
  res.redirect("/home")
});

app.get("/home", (req, res) => {
  res.render("home-user",{mytitle: "HOME"})
});

app.get("/filter", (req, res) => {
  res.render("filter",{mytitle: "filter"})
});

app.get("/about",isAdmin, (req, res) => {
  res.render("about",{mytitle: "about"})
});

app.get("/services", (req, res) => {
  res.render("services",{mytitle: "services"})
});

app.get("/gallery", (req, res) => {
  res.render("gallery",{mytitle: "gallery"})
});

app.use("/users", userRouter);

// ----------------------------------Router admin------------------------------------------------------


// booking PATH
app.use("/admin/book", adminbookRouter);
// all-Trips PATH
app.use("/admin/Trips", adminTripsRouter);
// all-transport PATH
app.use("/admin/transport", admintransportRouter);

// app.get("/admin/add-new-transport",isAuthenticated,isAdmin, (req, res) => {
//   res.render("Trips/add-new-transport", { mytitle: "create new transport" });
// });
// all-offre PATH
app.use("/admin/offre", adminoffreRouter);



app.get("/admin/add-new-offre", (req, res) => {
  res.render("offre/add-new-offre",{mytitle: "create new offre"})
});

//------------------------------------- Router user-------------------------------------------------------



// booking PATH

app.use("/book", userbookRouter);
// all-Trips PATH
app.use("/Trips", userTripsRouter);

app.get("/add-new-Trips",isAuthenticated, (req, res) => {
  res.render("Trips/add-new-Trips", { mytitle: "create new Trips" });
});

// all-transport PATH
app.use("/transport", usertransportRouter);
// all-offre PATH
app.use("/offre", useroffreRouter);









app.listen(3000, ()=> {

  console.log(' app is wokring on port 3000')
})




//  404 
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});


// Auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
}); 

