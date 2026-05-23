import { Router } from "express";
import { createUserHandler, getUsersHandler } from "../controllers/user";

const router = Router();

router.post("/" , createUserHandler);

router.get("/" , getUsersHandler);

export default router;