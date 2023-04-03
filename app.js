//  to controll ur website

const express = require("express");
const app = express();
const port = 5000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
const db = require('./config/database');
const session = require('express-session');
const flash = require('connect-flash');

app.use(express.urlencoded({ extended: true }));



const bookRouter = require("./routes/book");
const TripsRouter = require("./routes/Trips");
const offreRouter = require("./routes/offre");
const userRouter = require("./routes/user");
const transportRouter = require("./routes/transport");
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
    res.redirect('/login');
  }
}

app.get('/admin', isAuthenticated, isAdmin, function(req, res) {
  // Code to display admin dashboard goes here
  res.render("home",{mytitle: "HOME"})
});




// router
app.get("/", (req, res) => {
  res.redirect("/home")
});

app.get("/home", (req, res) => {
  res.render("home",{mytitle: "HOME"})
});

app.get("/about", (req, res) => {
  res.render("about",{mytitle: "about"})
});

app.get("/services", (req, res) => {
  res.render("services",{mytitle: "services"})
});

app.get("/gallery", (req, res) => {
  res.render("gallery",{mytitle: "gallery"})
});







// booking PATH

app.use("/book", bookRouter);

// all-Trips PATH

app.use("/Trips", TripsRouter);

app.get("/add-new-Trips",isAuthenticated, (req, res) => {
  res.render("Trips/add-new-Trips", { mytitle: "create new Trips" });
});

// all-transport PATH
app.use("/transport", transportRouter);
app.get("/add-new-transport",isAuthenticated, (req, res) => {
  res.render("transport/add-new-transport", { mytitle: "create new transport" });
});


// all-offre PATH
app.use("/offre", offreRouter);
app.get("/add-new-offre", (req, res) => {
  res.render("offre/add-new-offre", { mytitle: "create new offre" });
});

app.use("/users", userRouter);




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

