import User from "./../models/user/index.js";
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.cookies.w_auth;
  const decoded_token = jwt.decode(req.cookies.w_auth);
  const id = decoded_token && decoded_token.id;

  if (token === "") {
    res.status(403).json({ success: false, err: "unauthorized !" });
  } else {
    User.findOne({
      _id: id,
    }).then((user) => {
      if (!user) {
        res.status(404).json({ success: false, err: "User Not Found" });
      }
      (req.token = token),
        (req.user = {
          id: user._id,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          github_token: user.github_token ? user.github_token : null,
          isLoggedIn: true,
        });
      next();
    });
  }
};

export default auth;
