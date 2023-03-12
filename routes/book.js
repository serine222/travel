const express = require("express");
const router = express.Router();
// const Vol = require("../models/volSchema");

const BookController = require("../controllers/BookController");


router.get("/", BookController.Book_index_get);
router.get("/Book", BookController.Book_index_get);


router.get("/all-Book", BookController.Book_all_get);

router.post("/", BookController.Book_post);


router.get("/:id", BookController.Book_details_get);

router.delete("/:id", BookController.Book_delete);


module.exports = router;
