const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Login-System"); // Fixed typo

connect
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database", err);
  });

const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Collection = mongoose.model("users", LoginSchema); // Naming convention: start with uppercase for models
module.exports = Collection;
