import express from "express";
import dotenv, { configDotenv } from "dotenv";
dotenv.config();
const app = express();
import cors from "cors";
const PORT = 8000 || process.env.PORT;

import path from "path";

const __dirname = path.resolve();
console.log(__dirname);

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/build"));

///connect MongoDb

import { mongoConnect } from "./src/config/mongoDb.js";

mongoConnect();

import taskRouter from "./src/router/TaskRouter.js";

app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "index.html");
});

//api endpoints
//TASK CRUD operations

//router

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "server running as normal",
  });
});

app.listen(PORT, (error) => {
  error && console.log(error.message);

  console.log(`server running at http://localhost:${PORT}`);
});
