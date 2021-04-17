const mongoose = require("mongoose");

const postsSchema = mongoose.Schema({
	name: { type: String, required: true },
	age: { type: Number, required: true },
});

module.exports = mongoose.model("userData", postsSchema);
