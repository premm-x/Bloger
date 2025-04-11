import express from 'express';
import { register, login, update } from '../controller/user.controller.js';

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.put('/update', update);



export default router;