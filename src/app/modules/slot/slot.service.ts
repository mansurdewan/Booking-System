import { Response } from "express";
import { TSlot } from "./slot.interface";
import { Slot } from "./slot.model";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

const inserSlotInDB = async (payload: TSlot, res: Response) => {
  const createdSlotData = await Slot.create(payload);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Slot  created successfully",
    data: createdSlotData,
  });
};
const getAllSlotsFromDB = async (payload: any, res: Response) => {
  const allSlotsData = await Slot.find({ payload });
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "All Slots are retrived  successfully",
    data: allSlotsData,
  });
};

const slotService = {
  inserSlotInDB,
  getAllSlotsFromDB,
};
export default slotService;
