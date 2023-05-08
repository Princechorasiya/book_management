const express = require("express");
const dotenv = require("dotenv");
const Dbconnection = require("./dataBaseConnection");

dotenv.config()


// console.log("hello");

// we have to kill the server and restart when we change connection

const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const app = express();
const port = 8082;

Dbconnection();
app.use(express.json());

app.use('/users', userRouter);
app.use('/books', bookRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "server us up and running",
        data: "hey"
    });
});
app.get("*", (req, res) => {
    res.status(200).json({
        message: "this route dne"
    });

});

app.listen(port, () => {
    console.log(`server running o port ${port}`);

});


// mvc arch >>>controllers
// model  sdepicts teh strucutre of mongo collections
// view  view wrt to frontend

// controllers  brain or logical part of route

// books.controllers.js
// users.controllers.js



// schema
// id String
// name: String
// age: number

// gender char||varchar

// model >>
//     id: !23
// naem:devtown 