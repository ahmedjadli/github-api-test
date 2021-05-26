import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const { DB_USER, DB_PASSWORD, DB_URL } = process.env;

const dbConnectionURL = {
  CLUSTER_URL: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_URL}/github-api-test?retryWrites=true&w=majority`,
};

mongoose
  .connect(dbConnectionURL.CLUSTER_URL, options)
  .then(() => console.log("Connected to MongoDB Atlas !"))
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atals !");
    console.log("####################################");
    console.log(error);
    console.log("####################################");
  });
