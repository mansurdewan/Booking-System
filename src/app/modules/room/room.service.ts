import httpStatus from "http-status";
import { sendResponse } from "../../utils/sendResponse";
import { MeetingRoom } from "./room.model";
import { resolve } from "dns/promises";
import { Response } from "express";
import { TMeetingRoom } from "./room.interface";

const insertRoomInfoInBD = async (payload: TMeetingRoom, res: Response) => {
  const roomData = await MeetingRoom.create(payload);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Room added successfully",
    data: roomData,
  });
};
const getSingleRoomFromBD = async (id: unknown, res: Response) => {
  const singleRoomData = await MeetingRoom.findById(id);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Room retrieved successfully",
    data: singleRoomData,
  });
};

const getAllRoomFromBD = async (res: Response) => {
  const allRoomData = await MeetingRoom.find();

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "All Room retrieved successfully",
    data: allRoomData,
  });
};

const updateSingleRoom = async (
  id: unknown,
  payload: Partial<TMeetingRoom>,
  res: Response
) => {
  const singleRoomData = await MeetingRoom.findById(id);

  if (!singleRoomData) {
    throw new Error("The room is not exits");
  }
  const updatedRoom = await MeetingRoom.findByIdAndUpdate(id, payload, {
    new: true,
  });
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Room  updated successfully",
    data: updatedRoom,
  });
};
const deleteRoomFromBD = async (id: unknown, res: Response) => {
  const deletedData = await MeetingRoom.findByIdAndDelete(id);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Room  deleted successfully",
    data: deletedData,
  });
};
const roomServices = {
  insertRoomInfoInBD,
  getSingleRoomFromBD,
  getAllRoomFromBD,
  updateSingleRoom,
  deleteRoomFromBD,
};
export default roomServices;
