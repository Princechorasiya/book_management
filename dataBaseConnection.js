const mongoose = require("mongoose");

function Dbconnection() {
	const DB_URL = process.env.MONGO_URI; //security reason we keep the mongo url safe

	mongoose.connect(DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	// console.log(DB_URL);
}
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));

db.once("open", function () {
	console.log("DB connected !");
});

module.exports = Dbconnection;
