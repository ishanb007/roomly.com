import express, {Request, Response} from "express";
import User from '../models/user.ts';
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req: Request, res: Response): Promise<any> => {
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

        return res.sendStatus(200);

    } catch (error) {
        //we don't usually send these errors because they might contain sensitive info - so just logging them at backend.
        console.log(error);
        res.status(500).send({message: "Something went wrong"});
    }
});

export default router;





//return n