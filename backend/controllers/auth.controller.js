import {User} from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';
import { sendVerificationEmail } from '../mailtrap/emails.js';

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
        await sendVerificationEmail(user.email,verificationToken);
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


export const verifyEmail = async(req,res)=>{
const{code}=req.body
try {
    const user = await User.findOne({
        verificationToken:code,
        verificationTokenExpiresAt:{$gt:Date.now()}
    })
    if(!user){
        return res.status(401).json({sucess:false,message:"Invalid or Expired verification code"})
    }
    
} catch (error) {
    
}
};

export const login = async (req,res)=>{
    res.send("login route")
};

export const logout = async (req,res)=>{
    res.send("logout route")
}

