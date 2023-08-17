import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must insert a name"],
  },
  email: {
    type: String,
    required: [true, "You must insert a name"],
  },
  phone: {
    type: String,
    required: [true, "You must insert a password"],

  }
});

const User = mongoose.model("User", userSchema);

export{User}
