import { Router , Request , Response } from "express";
import { registerBuyerHandler } from "../controllers/auth.controller";

const router = Router();

router.post('/registerBuyer' , registerBuyerHandler);

export default router;