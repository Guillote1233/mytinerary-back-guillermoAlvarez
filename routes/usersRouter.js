import {Router} from 'express';
import userController from '../controllers/userController.js'

const usersRouter = Router();
const { signUp } = userController;

usersRouter.post('/', signUp);

export default usersRouter;