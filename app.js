//  to controll ur website

const express = require("express");
const app = express();
const port = 5000;
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.static('public/css'))
app.use(express.static('public/js'))



//mongoose
const mongoose = require('mongoose');
 
mongoose.connect("mongodb://127.0.0.1:27017/blog")
  .then( result => {

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
      });
  })
  .catch( err => {
    console.log(err);
  }); 




// router
app.get("/", (req, res) => {
  res.redirect("/home");
 
});

app.get("/home", (req, res) => {
  res.render("home")
});

app.get("/about", (req, res) => {
  res.render("about")
});

app.get("/html", (req, res) => {
  res.render("index")
});

app.get("/package", (req, res) => {
  res.render("package")
});

app.get("/book", (req, res) => {
  res.render("book")
});


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

