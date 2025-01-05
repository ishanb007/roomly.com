// "dev": "nodemon --watch . --ext ts --exec ts-node --esm ./src/index.ts "

import express, {Request,Response} from 'express';
import cors from 'cors';
import "dotenv/config"; //loads environment variable when app starts
import mongoose from 'mongoose';
import userRoutes from './routes/users.ts';
import authRoutes from "./routes/auth.ts";
import cookieParser from "cookie-parser";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(cookieParser());
app.use(express.json()); //to auto convert body to json
app.use(express.urlencoded({extended:true})); //to parse urls - query parameters etc.
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

app.listen(7000, () => {
    console.log("server running on 7000");
});