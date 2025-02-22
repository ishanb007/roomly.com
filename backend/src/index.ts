// "dev": "nodemon --watch . --ext ts --exec ts-node --esm ./src/index.ts "

import express, {Request,Response} from 'express';
import cors from 'cors';
import "dotenv/config"; //loads environment variable when app starts
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';
import authRoutes from "./routes/auth.js";
import hotelRoutes from "./routes/hotels.js";
import myHotelRoutes from "./routes/my-hotels.js";
import bookingRoutes from "./routes/my-bookings.js";
import cookieParser from "cookie-parser";
import exp from 'constants';
import path from 'path';
import { fileURLToPath } from 'url';
import { v2 as cloudinary} from 'cloudinary';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(cookieParser());
app.use(express.json()); //to auto convert body to json
app.use(express.urlencoded({extended:true})); //to parse urls - query parameters etc.
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

app.use(express.static(path.join(__dirname,"../../frontend/dist")))

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/my-hotels", myHotelRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/my-bookings", bookingRoutes);

app.get("*", (req: Request, res: Response)=>{
    res.sendFile(path.join(__dirname,"../../frontend/dist/index.html"));
})

app.listen(7000, () => {
    console.log("server running on 7000");
});