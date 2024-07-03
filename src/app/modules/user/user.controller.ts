import { Request, Response } from "express";
import userService from "./user.service";

const createAdmin = (req: Request, res: Response) => {
  const { adminData } = req.body;
  userService.insertAdminInfoInDB(adminData, res);
};
const createUser = (req: Request, res: Response) => {
  const { userData } = req.body;
  userService.insertUserInfoInDB(userData, res);
};
const userController = {
  createAdmin,
  createUser,
};
export default userController;
