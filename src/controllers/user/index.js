import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./../../models/user/index.js";
import dotenv from "dotenv";
dotenv.config();

const { TOKEN_EXP, JWT_SECRET } = process.env;

export const signup = (req, res, next) => {
  console.log(req.body);
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  });
  user
    .save()
    .then((user) => {
      res.status(201).json({
        success: true,
        user,
      });
    })
    .catch((err) => res.status(500).json({ success: false, err }));
};

export const login = (req, res, next) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      return res.status(404).json({ success: false, err: "User not found" });
    }
    bcrypt
      .compare(req.body.password, user.password)
      .then((valid) => {
        if (!valid) {
          return res
            .status(500)
            .json({ success: false, err: "Invalid password !" });
        }
        const token_exp = TOKEN_EXP;
        const token = jwt.sign({ id: user._id }, JWT_SECRET, {
          expiresIn: token_exp,
        });
        if (token !== "") {
          res.cookie("w_authExp", token_exp);
          res
            .cookie("w_auth", token)
            .status(200)
            .json({ success: true, userId: user.id });
        }
      })
      .catch((err) => {
        res.status(500).json({ success: false, err: err.message });
      });
  });
};

export const authenticate = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export const logout = (req, res) => {
  res.cookie("w_authExp", "");
  res.cookie("w_auth", "").status(200).json({ success: true });
};
