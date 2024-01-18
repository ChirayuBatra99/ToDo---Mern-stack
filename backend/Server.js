const express= require("express")
const mongoose = require("mongoose")
const dotenv =require("dotenv");
const routes= require("./routes/ToDoRoutes");
dotenv.config();

const cors=require("cors");

const app = express();

const PORT= process.env.PORT;
const URL= process.env.MONGO_URI;
app.use(cors());
app.use(express.json());

app.listen(PORT, ()=> console.log("listening at The gievn port"));



mongoose.connect(URL).
then(()=> console.log("MONGODB connected"))
.catch((error)=> console.log(error));

app.use("/api", routes);
console.log("hii")

