import express from "express";
import bodyParser from "body-parser";
import path from "path";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import reposRouter from "./routes/repos/index.js";
import userRouter from "./routes/user/index.js";

import "./config/db.js";
const app = express();
//cookies
app.use(cookieParser());

//Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS
app.use(cors({ origin: true, credentials: true }));

// Helmet

app.use(helmet());

//Routes
app.use("/api", reposRouter);
app.use("/api", userRouter);

// Serving static content from the client
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/out"));

  app.get("*", (res) => {
    res.sendFile(path.resolve(__dirname, "./../client", "out", "index.html"));
  });
}

export default app;
