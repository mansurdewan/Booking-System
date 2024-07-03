import { Response } from "express";
import { TAdmin } from "../admin/admin.interface";
import { sendResponse } from "../../utils/sendResponse";
import { AdminModel } from "../admin/admin.model";
import httpStatus from "http-status";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const insertAdminInfoInDB = async (payload: TAdmin, res: Response) => {
  const createdAdminData = await AdminModel.create(payload);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Admin created   successfully",
    data: createdAdminData,
  });
};
const insertUserInfoInDB = async (payload: TUser, res: Response) => {
  const createUserData = await User.create(payload);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "User created   successfully",
    data: createUserData,
  });
};
const userService = {
  insertAdminInfoInDB,
  insertUserInfoInDB,
};
export default userService;
