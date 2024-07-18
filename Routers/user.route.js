import express from "express";
import auth from "../middleware/auth.middleware.js";
import {
  login,
  signup,
  getuser,
  updateuser,
  logout 
} from "../Controller/user.controller.js";

let Router = express.Router();

Router.post("/signup", signup)
  .post("/login", login)
  .get("/getuser",auth ,  getuser)
  .post("/update",auth ,  updateuser)
  .post("/logout" ,auth,  logout )

  export default Router;