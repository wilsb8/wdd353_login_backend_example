const mongoose = require("mongoose");
const loginSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Login", loginSchema);