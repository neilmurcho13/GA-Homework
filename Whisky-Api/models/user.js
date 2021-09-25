import mongoose from "mongoose";
import bcrypt from "bcrypt";
import mongooseHidden from "mongoose-hidden";
import uniqueValidator from "mongoose-unique-validator";

const user = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

user.pre("save", function (next) {
  this.passowrd = bcrypt.hashSync(this.password, bcrypt.genSaltSync());
  next();
});

user.methods.validatePassword = function (password) {
  return bcrypt.compare;
};

user.plugin(uniqueValidator);
user.plugin(mongooseHidden({ defaultHidden: { password: true, email: true } }));

const User = mongood.model("User", user);

export default User;
