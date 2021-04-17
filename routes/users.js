const express = require("express");
const posts = require("../models/userData");
const router = express.Router();

router.get("/", (req, res) => {
	res.send({ name: "Vasua", age: 25, work: "JsDeveloper" });
});
router.post("/", (req, res) => {
	console.log("Hello");
	console.log(req.body);
});

module.exports = router;
