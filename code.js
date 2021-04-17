const mongoose = require("mongoose");
const express = require("express");
require("dotenv/config");

const PORT = process.env.PORT || 3000;
const app = express();

//import routes
const usersRoute = require("./routes/users");
app.use("/users", usersRoute);

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
		app.post("/test", function (req, res) {
			res.send("Got a POST request");
		});
	} catch (e) {
		console.log(e);
	}
}

start();
