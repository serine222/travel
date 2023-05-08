//  to controll ur website

const express = require("express");
const app = express();
const port = 3000;
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

const adminhotelRouter = require("./routes/admin/hotel");
const adminBookhotelRouter = require("./routes/admin/Bookhotel");

const admintransportRouter = require("./routes/admin/transport");
const adminBookTransporRouter = require("./routes/admin/BookTransport");


// Router user

const userbookRouter = require("./routes/user/book");
const userTripsRouter = require("./routes/user/Trips");
const useroffreRouter = require("./routes/user/offre");

const userhotelRouter = require("./routes/user/hotel");
const userBookhotelRouter = require("./routes/user/Bookhotel");

const usertransportRouter = require("./routes/user/transport");
const userBookTransporRouter = require("./routes/user/BookTransport");



const homeRouter = require("./routes/user/home");
const userRouter = require("./routes/user");
const passport = require('passport');
const passportSetup = require('./config/passport-setup');


// session and flash config .
app.use(
  session({
    secret: "lorem ipsum",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000000 },
  })
);




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
  res.render("home",{mytitle: "home"})
});



// router

app.get("/", (req, res) => {
  res.redirect("/home")
});

app.use("/home",  homeRouter);




app.get("/about", (req, res) => {
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
app.use("/admin/BookTranspor", adminBookTransporRouter);
// all-hotel PATH
app.use("/admin/hotel", adminhotelRouter);
app.use("/admin/Bookhotel", adminBookhotelRouter);


// app.get("/admin/add-new-transport",isAuthenticated,isAdmin, (req, res) => {
//   res.render("Trips/add-new-transport", { mytitle: "create new transport" });
// });
// all-offre PATH
app.use("/admin/offre", adminoffreRouter);



app.get("/admin/add-new-offre",isAdmin, (req, res) => {
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
app.use("/BookTransport", userBookTransporRouter);

// all-hotel PATH
app.use("/hotel", userhotelRouter);
app.use("/Bookhotel", userBookhotelRouter);

// all-offre PATH
app.use("/offre", useroffreRouter);









app.listen(port, ()=> {

  console.log(' app is wokring on port ')
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

