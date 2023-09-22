import {Router} from 'express';
import userController from '../controllers/userController.js'
import validator from '../middlewares/validator.js';
import { signUpSchema } from '../validators/signUpValidator.js';
import { signInSchema } from '../validators/signInValidator.js';
import passport from '../middlewares/passport.js';

const usersRouter = Router();
const { signUp, signIn, signInWithToken } = userController;

usersRouter.post('/', validator(signUpSchema), signUp);
usersRouter.post('/login', validator(signInSchema), signIn);
usersRouter.get('/token', passport.authenticate('jwt',{session:false}), signInWithToken)

export default usersRouter;