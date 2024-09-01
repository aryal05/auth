import jwt from "jsonwebtoken";


export const verifyToken =(req,res,next)=>{
    const token = req.cookies.token
    if(!token) return res.status(400).json({success:false, message:"Unauthorized"})
    try {
const decoded = jwt.verify(token, process.env.JWT_SECRET)
if(!decoded) return res.status(400).json({success:false, message:"Unauthorized- invalid token"})
req.userId = decoded.userId
next();
       
    } catch (error) {
        console.log("Error in verifying token", error)
        return res.status(400).json({success:false, message:"Server Error"})

    }

}