import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { UserType } from "../shared/types";

//model to load in db
const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
});

//pre is Mongoose middleware to execute before another function eg here before saving the values.
userSchema.pre("save", async function(next){
    if(this.isModified('password')){ // checks if specific value has been modified
        this.password=await bcrypt.hash(this.password,8);
    }
    next();
})

//create model using type - UserType.
const User = mongoose.model<UserType>("User", userSchema);

export default User;
