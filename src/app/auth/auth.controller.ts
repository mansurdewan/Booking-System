import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import authServices from "./auth.service";
const userSignUp = (req: Request, res: Response) => {
  const { userInfo } = req.body;
  authServices.inserUserInfoInDB(userInfo, res);
};
const userLogin = (req: Request, res: Response) => {
  const { userInfo } = req.body;
  authServices.authenticUserLogin(userInfo, res);
};
const authController = {
  userSignUp,
  userLogin,
};
export default authController;
