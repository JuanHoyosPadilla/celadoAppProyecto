import * as dotenv from 'dotenv'
dotenv.config();
import jwt from 'jsonwebtoken'
import User from "../models/user.js";
import Role from "../models/role.js";


export const loginfuntion = async (req, res) => {
  
  try {
    const userFound = await User.findOne({ email: req.body.email }).populate(
      "roles"
    );
    if(!userFound) return res.json({message: "User not Found"})

    const matchPassword = await User.comparePassword(
        req.body.password,
        userFound.password
    )

    


    if(!matchPassword) return res.json({token: null,message: "Invalid Password"})

    const token = jwt.sign({id: userFound._id},process.env.SECRET,{
        expiresIn: 86400, //24 horas
    })
    const {name,roles,last_name,avatar} = userFound
    res.json({token,name,roles,last_name,avatar})


  } catch (error) {
    console.error(error);
  }
};
