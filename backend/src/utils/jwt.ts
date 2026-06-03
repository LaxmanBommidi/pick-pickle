import jwt from "jsonwebtoken";


export const generateAccessToken = async ( userId : string , email : string , role : string ) => {
    return jwt.sign( 
        { 
            userId, 
            email ,
            role
        }, 
        process.env.JWT_ACCESS_SECRET!,
        { 
            expiresIn: "1d" 
        });
}