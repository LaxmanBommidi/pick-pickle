import express from 'express';
import userRoute from './routes/user'

const app = express();
app.use(express.json());

app.get("/" , (req,res) => {
    return res.json("hello World");
});

app.use("/api/users" , userRoute);

export default app;