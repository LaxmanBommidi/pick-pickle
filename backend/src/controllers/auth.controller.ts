import { Request, Response } from "express";
import { registerBuyer } from "../services/auth.service";
import { generateAccessToken } from "../utils/jwt";

export const registerBuyerHandler = async( req : Request , res : Response) => {
    try {
        const { name , email , password } = req.body;
        const user = await registerBuyer( name , email , password );
        const token = await generateAccessToken( user.createdUser.id , email , user.createdUser.role );
        res.status(201).json({
            success : true,
            accessToken : token,
            data : user
        });
    }
    catch( error ){
        res.status(400).json({
            success : false,
            message : error instanceof Error ? error.message : "Something went wrong"
        });
    }
}