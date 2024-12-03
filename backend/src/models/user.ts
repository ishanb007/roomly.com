import mongoose from "mongoose";
import bcrypt from "bcryptjs";

//ts - checking type of values in UserType to get ki vhi mil rha ki nhi, _id default id creation in mongodb
export type UserType={
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;   
};

//model to load in db
const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
});

//before saving check if password has been modified and hash it if it
userSchema.pre("save", async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,8);
    }
    next();
})

//create model using type - UserType.
const User = mongoose.model<UserType>("User", userSchema);

export default User;
