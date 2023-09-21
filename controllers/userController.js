import User from "../models/User.js";

const userController = {
  signUp: async (req, res, next) => {
    try {

      const newUser = await User.create(req.body);
      return res.status(201).json({
        sucess: true,
        userData: newUser,
        message: 'Sign Up successfully'
      })

    } catch(error) {
        console.log(error)
        next(error)
    }
  },
};

export default userController
