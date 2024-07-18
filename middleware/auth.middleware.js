import jwt from "jsonwebtoken";
import User from "../Models/user.model.js";
import 'dotenv/config'
let auth = async (req, res, next) => {
  let token = req.cookies?.Token;

  
  try {
    if (!token) {
      return res
        .status(401)
        .send({ result: false, message: "User not authenticated " });
    } else {
      let { id } =  jwt.verify(token, process.env.PRIVATE_KEY);

      let user = await User.findById(id);

      req.user = user;

      next();
    }
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

export default auth;