import express from "express";
import 'dotenv/config'
import dbConnect from "./DB/index.db.js";
import cookieParser from "cookie-parser";
import userRouter from "./Routers/user.route.js"
import cors from 'cors'

let server = express();

let port = process.env.PORT || 8000;

server.use(express.json()); 
server.use(express.urlencoded({ extended: true }))
server.use(cookieParser()); 
// server.use(cors({
//     origin: 'https://onestop1411.netlify.app/',
//     credentials :true , 
// }))

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    credentials :true ,}
  
server.use(cors(corsOptions));

server.use("/users" , userRouter); 


dbConnect().then(()=>{
    server.listen(port, ()=>{
        console.log("Server is connected at port " , port)
    })
}).catch((err)=>{
    console.log(err)
})
