const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv/config");
//express module
const PORT = process.env.PORT || 3000;
const app = express();

//import routes

async function start() {
	try {
		await mongoose.connect(
			process.env.DB_CON,
			{
				useUnifiedTopology: true,
				useNewUrlParser: true,
				useFindAndModify: false,
			},
			() => console.log("connectet to db")
		);
		app.listen(PORT, () => {
			console.log("Server started");
		});
	} catch (e) {
		console.log(e);
	}
}

start();
const usersRoute = require("./routes/users");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", usersRoute);
