import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, unique: true },
  usertype: String,
});

const User = mongoose.model("user", userSchema);

export default User;
