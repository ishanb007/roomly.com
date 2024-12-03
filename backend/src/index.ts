// "dev": "nodemon --watch . --ext ts --exec ts-node --esm ./src/index.ts "


import express, {Request,Response} from 'express';
import cors from 'cors';
import "dotenv/config"; //loads environment variable when app starts
import mongoose from 'mongoose';
import userRoutes from './routes/users.ts';


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json()); //to auto convert body to json
app.use(express.urlencoded({extended:true})); //to parse urls - query parameters etc.
app.use(cors());

app.use("/api/users", userRoutes)

app.listen(7000, () => {
    console.log("server running on 7000");
});