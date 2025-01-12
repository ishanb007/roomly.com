import express, {Request, Response} from "express";
import User from '../models/user.js';
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";
import verifyToken from "../middleware/auth.js";


const router = express.Router();

router.post("/register", [
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Email required").isEmail(),
    check("password", "Password with >6 characters required").isLength({min:6}),

], async (req: Request, res: Response): Promise<any> => {
    const errors = validationResult(req); //the validation check we did it's errors are passed along with body in request, so we check if there are errors before performing db operations.
    if(!errors.isEmpty()){
        return res.status(400).json({message : errors.array()});
    }

    try {
        let user = await User.findOne({
            email: req.body.email,
        });

        if(user){
            return res.status(400).json({message: "user already exists"});
        }

        user = new User(req.body);
        await user.save();
        
        const token= jwt.sign({userId: user.id}, process.env.JWT_SECRET_KEY as string, {expiresIn:"1d"}); 

        res.cookie("auth_token", token, {
            httpOnly:true,
            secure: process.env.NODE_ENV==="production", 
            maxAge: 86400000,
        });

        return res.status(200).send({message: "User Registered ok"});

    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Something went wrong"});
    }
});

export default router;





//return n