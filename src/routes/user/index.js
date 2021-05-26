import * as UserController from "../../controllers/user/index.js";
import auth from "../../middlewares/auth.js";

import express from "express";
const { Router } = express;
const userRouter = Router();

userRouter.post("/auth/signup", UserController.signup);
userRouter.post("/auth/login", UserController.login);
userRouter.get("/auth", auth, UserController.authenticate);
userRouter.get("/auth/logout", auth, UserController.logout);

export default userRouter;
