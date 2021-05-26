import * as ReposController from "../../controllers/repos/index.js";
import express from "express";
const { Router } = express;
const reposRouter = Router();

reposRouter.get("/repos/:username", ReposController.getReposByUsername);

export default reposRouter;
