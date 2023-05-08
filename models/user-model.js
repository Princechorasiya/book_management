const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    surname: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
    },
    issuedBook: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Book",
    },
    returnDate: {
        type: String,
        required:false,
    },
    subscriptionType: {
        type: String,
        required:true,
    },
    subscriptionDate:{
        type: String,
        required:true,
    }

},
{
timestamps:true
    });


module.exports = mongoose.model("User",userSchema);
//book is table name


// referential intercity

// foreign key and primary key


// user table                        books table
// issuedBook(fk)                     issuedBook(pk)

// referential integrity means both have same values


