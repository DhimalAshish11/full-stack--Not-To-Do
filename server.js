import express from "express";
const app = express();

const PORT = 8000;

app.use(express.json());

import taskRouter from "./src/routers/taskRouter.js";

app.use("/api/v1/task", taskRouter);

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
