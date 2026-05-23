import {prisma} from '../config/db'

export const createUser = async( 
    name : string , 
    email : string , 
    password : string 
    ) => {
        const user = await prisma.user.create({
            data : {
                name ,
                email,
                password
            }});
        return user ; 
    }


export const getUsers = async() =>{
    const users = await prisma.user.findMany();
    return users;
}