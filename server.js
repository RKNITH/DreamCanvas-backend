import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connectDb from './config/mongodb.js';
import userRouter from './routes/userRoute.js';
import imageRouter from './routes/imageRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT;


app.use(express.json())
app.use(cors())
await connectDb()


app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)





app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
