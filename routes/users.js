const express = require("express");
const User = require("../models/userData");
const router = express.Router();

router.post("/", async (req, res) => {
	console.log(req.body);
});
router.get("/", async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (e) {
		console.log(e);
	}
});

module.exports = router;
