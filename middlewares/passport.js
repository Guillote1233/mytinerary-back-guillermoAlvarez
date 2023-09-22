import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from "../models/User.js";

var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
}

const fn = async (payload, next) => {
  try {
    const user = await User.findOne({email:payload.email})
    if(user){
      next(null, user)
    }
  } catch (error) {
    console.log(error);
  }
}

export default passport.use(new Strategy(opts, fn))
