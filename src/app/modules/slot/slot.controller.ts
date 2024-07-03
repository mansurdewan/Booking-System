import { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import slotService from "./slot.service";

const createSlotController = (req: Request, res: Response) => {
  const { slotData } = req.body;

  slotService.inserSlotInDB(slotData, res);
};
const getAllSlotController = (req: Request, res: Response) => {
  const { slotsData } = req.body;
  slotService.getAllSlotsFromDB(slotsData.isBooked, res);
};
const slotController = {
  createSlotController,
  getAllSlotController,
};

export default slotController;
