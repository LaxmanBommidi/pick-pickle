import express from 'express';
import userRoute from './routes/user.route'

const app = express();

app.use(express.json());

app.get("/" , (req,res) => {
    return res.status(200).json({
        "name" : "pick-pickle api",
        "version" : "1.0.0",
        "message" : "Welcome to Pick-Pickle API",
        "base_url" : "pick-pickle.vercel.app/"
    });
});

app.use("/api/users" , userRoute);

export default app;