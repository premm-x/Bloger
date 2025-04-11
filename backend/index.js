import dotenv from 'dotenv'
dotenv.config()
import express, { urlencoded } from 'express';
import cors from 'cors';
import connectiondb from './db/dbConn.js'
import userRoutes from './routes/user.routes.js'
import postRoutes from './routes/post.routes.js'

const app = express();
const port = process.env.PORT || 5000;


app.use(cors({
    origin:'*',
}));
app.use(express.json());
app.use(urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.send('CORS-enabled server is running!');
});

app.use('/user', userRoutes);
app.use('/post', postRoutes);


app.listen(port, () => {
    console.log(`Server is running on port :${port}`);
});