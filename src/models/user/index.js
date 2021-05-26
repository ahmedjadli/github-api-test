import mongoose from "mongoose";
import * as uniqueValidator from "mongoose-unique-validator";

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    github_token: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
