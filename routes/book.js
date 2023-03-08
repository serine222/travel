app.get("/book", (req, res) => {
    res.render("book",{mytitle: "book"})
  });