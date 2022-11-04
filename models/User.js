const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, defaut: "" },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjIwMjE1ZWRmNTg0NTAzYzZiMjdhZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzM2ODI5NCwiZXhwIjoxNjY3ODAwMjk0fQ.aW3b3GGoc2UqeapoItMwzHcJLmNLYW5rs4W387egySA
