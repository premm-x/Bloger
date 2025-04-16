import dotenv from 'dotenv'
dotenv.config()
import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectiondb from './db/dbConn.js'
import userRoutes from './routes/user.routes.js'
import postRoutes from './routes/post.routes.js'
import followerRoutes from './routes/follower.routes.js';


const app = express();
const port = process.env.PORT || 5000;


app.use(cors({
    origin:'*',
}));
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('CORS-enabled server is running!');
});

app.use('/user', userRoutes);
app.use('/post', postRoutes);
app.use('/follow', followerRoutes);


app.listen(port, () => {
    console.log(`Server is running on port :${port}`);
});