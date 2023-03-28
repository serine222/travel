//  to controll ur website

const express = require("express");
const app = express();
const port = 5000;
app.set('view engine', 'ejs')
app.use(express.static('public'))
const db = require('./config/database')

app.use(express.urlencoded({ extended: true }));

const bookRouter = require("./routes/book");
const TripsRouter = require("./routes/Trips");




//mongoose
// const mongoose = require('mongoose');
 
// mongoose.connect("mongodb://127.0.0.1:27017/trevel")
//   .then( result => {

//     app.listen(port, () => {
//         console.log(`Example app listening at http://localhost:${port}`);
//       });
//   })
//   .catch( err => {
//     console.log(err);
//   }); 




// router
app.get("/", (req, res) => {
  res.redirect("/home");
 
});

app.get("/home", (req, res) => {
  res.render("home",{mytitle: "HOME"})
});

app.get("/about", (req, res) => {
  res.render("about",{mytitle: "about"})
});



app.get("/destination", (req, res) => {
  res.render("destination",{mytitle: "destination"})
});

app.get("/services", (req, res) => {
  res.render("services",{mytitle: "services"})
});

app.get("/gallery", (req, res) => {
  res.render("gallery",{mytitle: "gallery"})
});

app.get("/review", (req, res) => {
  res.render("review",{mytitle: "gallery"})
});

app.get("/blogs", (req, res) => {
  res.render("blogs",{mytitle: "blogs"})
});



// booking PATH

app.use("/book", bookRouter);

// all-Trips PATH

app.use("/Trips", TripsRouter);

app.get("/add-new-Trips", (req, res) => {
  res.render("Trips/add-new-Trips", { mytitle: "create new Trips" });
});


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

