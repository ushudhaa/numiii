import express from "express";
import mongoose from "mongoose";
import empRoute from "./routes/employeeRoutes.js";


const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});



app.listen(port, () => {
  console.log("Example listening at ", ` http://localhost:${port}`);
});

app.use(express.json());

const MongoDb_Url =
  "mongodb+srv://numa:numaduma11@cluster0.4lk0rja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbConnection = mongoose.connect(MongoDb_Url);

dbConnection
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.error("Error connetcing to server:", error);
    process.exit(1);
  });

import emp from "./routes/employeeRoutes.js"
app.use("/api/employees",emp)