import express from "express";
import mongoose from "mongoose";
import routes from './routes/index.js';
import cookieparser from 'cookie-parser';
import employee from "./models/employee.js";
import bcrypt from "bcryptjs";

const seedAdmin = async () =>{
  try{
    const admin = await employee.findOne({email: 'admin@gmail.com'});
    if(!admin){
      const hashedPassword= await bcrypt.hash('admin',10);
      await employee.create({
        name: 'Admin',
        email: 'admin@gmail.com',
        password: hashedPassword,
        role: 'admin'
      });
    }
  }
catch(error){
  console.log(error);
}
}
seedAdmin();

const app = express();
const port = 3000;
app.use(express.json());
app.use(cookieparser());


//routes
app.use('/api',routes);

app.get("/", (req, res) => {
  res.send("Hello World");
});



app.listen(port, () => {
  console.log("Example listening at ", ` http://localhost:${port}`);
});


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
  