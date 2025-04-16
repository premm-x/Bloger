import express from 'express';
import { register, login, update, getAllUser, getLogInUser } from '../controller/user.controller.js';
import authMiddleware from '../middleware/userAuth.js'

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.put('/update', update);

router.get('/getAllUser', getAllUser);

router.post('/getLogInUser', getLogInUser);






export default router;