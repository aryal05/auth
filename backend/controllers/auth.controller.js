import {User} from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';

export const signup = async (req,res)=>{
    const {email,password,name}=req.body;
    try {
        if(!email || !password ||!name){
            throw new Error("All fields are required")
        }
        const userAlreadyExists = await User.findOne({email});
        // console.log("useralreadyexists", userAlreadyExists)
        if(userAlreadyExists){
            throw new Error("User Already exists")
        }

        const hashedPassword = await bcryptjs.hash(password,10);

        const verificationToken =()=>{
            return Math.floor(100000 + Math.random()*900000).toString();
        }

        const user = new User({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt:Date.now() + 24*60*1000,
        })
        await user.save();
 
        //JWT
        generateTokenAndSetCookie(res,user._id)
        res.status(201).json({
            sucess:true,
            message:"User created successfully",
            user:{
                ...user._doc,
                password:null,

            }
        })

        
    } catch (error) {
        res.status(400).json({sucess:false,message:error.message});
    }

};

export const login = async (req,res)=>{
    res.send("login route")
};

export const logout = async (req,res)=>{
    res.send("logout route")
}