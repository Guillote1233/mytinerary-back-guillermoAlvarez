import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const userController = {
  signUp: async (req, res, next) => {
    try {
      const emailExists = await User.findOne({email: req.body.email})

      if (!emailExists){
        const passwordHash = bcrypt.hashSync(req.body.password, 10)
        req.body.password = passwordHash
        const newUser = await User.create(req.body);
        const {email,name, surname, profilePicture,_id} = newUser;
        const token = jwt.sign({
          email,name, surname, profilePicture,_id
        }, process.env.SECRET_KEY,{expiresIn:"1h"})

        return res.status(201).json({
          sucess: true,
          userData: newUser,
          token: token,
          message: 'Sign Up successfully'
        })
      }
      return res.status(400).json({
        sucess:false,
        message: "Email already exists"
      })
    } catch(error) {
        console.log(error)
        next(error)
    }
  },
  signIn: async (req, res, next) =>{
    try {
      let { email, password } = req.body
      const userInDB = await User.findOne({email})

      if(!userInDB){
        throw new Error("No user exists with this email")
      }

      let passwordValidated = bcrypt.compareSync(password, userInDB.password)

      if(!passwordValidated){
        throw new Error("The email/password is incorrect")
      }
      const {name, surname, profilePicture,_id} = userInDB;
      const token = jwt.sign({
        email,name, surname, profilePicture,_id
      }, process.env.SECRET_KEY,{expiresIn:"1h"})

      return res.status(200).json({
        sucess: true,
        userData: userInDB,
        token: token,
        message: 'Sign In successfully'
      })
    } catch (error) {
      next(error)
    }
  },
  signInWithToken: (req, res)=>{
    const {name, surname, profilePicture,_id} = req.user;

    return res.status(200).json({
      sucess: true,
      userData: {name, surname, profilePicture,_id},
      message: 'Sign In successfully',
      body: req.body
    })

  }
};

export default userController
