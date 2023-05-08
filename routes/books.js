const express = require('express');
const router = express.Router();
const { getAllBooks, getSingleBookById, getAllIssuedBooks,addNewBook, updateBookById } = require("../controllers/book-controller");

const { books } = require("../data/books.json");
const { users } = require("../data/users.json");

const { userModel, bookModel } = require("../models/index");
// console.log(books);
// get books by id

router.get('/',getAllBooks );
// get the books by id
router.get('/:id', getSingleBookById);
// router.get('/:id', (req, res) => {
//     const { id } = req.params;
//     const book = books.find((each) => each.id === id);
//     if (!book) {
//         return res.status(404).json({
//             success: false,
//             message: "book does not exist",
            
//         });
//     };

//     return res.status(200).json({
//         success: false,
//         message:"book details are here",
//         data: book
//     })
// })


// get the all issued books 


// router.get('/issued/by-user', (req, res) => {
//     const userWithIssuedBook = users.filter((each) => {
//         if (each.issuedBook)
//             return each;
//     });

//     const issuedBooks = [];
//     userWithIssuedBook.forEach((each) => {
//         const book = books.find((book) => 
//             book.id = each.issuedBook
//         );

//         book.issuedBy = each.name;
//         book.issuedDate = each.issuedDate;
//         book.returnDate = each.returnDate;
//         issuedBooks.push(book);
//     });

//     if (issuedBooks.length === 0) {
//         return res.status(404).json({
//             success: false,
//             message: "no issued book",
            
//         });
//     }

//     return res.status(200).json({
//         success: true,
//         message: "issued book here",
//         data: issuedBooks
//     });
// });
router.get('/issued/by-user', getAllIssuedBooks);


// add book by id 
router.post("/", addNewBook);
// update a book by id

router.put("/:id", updateBookById);


module.exports = router
