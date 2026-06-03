import { prisma } from '../config/db';
import { hashPassword } from '../utils/password';


export const registerBuyer = async( 
    name : string , 
    email : string ,
    password : string
) => {
    const existingUser = await prisma.user.findUnique( {
        where : {
            email
        }
    });
    if(existingUser) {
        throw new Error("User already exists");
    }

    const passwordHash = await hashPassword( password );

    const user = await prisma.$transaction(
        async(tx) => {
            const createdUser = await tx.user.create({
                data : {
                    name , 
                    email,
                    passwordHash
                }
            });

            const buyerProfile = await tx.buyerProfile.create({
                data : {
                    userId : createdUser.id
                }
            });

            return {createdUser , buyerProfile};
        }
    )

    return user;
}
