import { Request, Response } from "express";
import { createUser, getUsers } from "../services/user";

export const createUserHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    const user = await createUser(name, email, password);

    res.status(201).json({
      success: true,
      data: user
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error
    });
  }
};

export const getUsersHandler = async (
  _req: Request,
  res: Response
) => {
  try {
    const users = await getUsers();

    res.status(200).json({
      success: true,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error
    });
  }
};