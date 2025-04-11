import express from 'express';
import { postCreate, getAllPost, userCreatedPost, deletePost, updatePost } from '../controller/post.controller.js'

const router = express.Router();

router.post('/create', postCreate);
router.delete('/delete/:postId', deletePost);
router.put('/update/:postId', updatePost);
router.get('/allPost', getAllPost);
router.post('/userCreatedPost', userCreatedPost);



export default router;