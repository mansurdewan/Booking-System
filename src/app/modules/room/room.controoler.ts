import { Request, Response, response } from "express";
import roomServices from "./room.service";

const createRoom = (req: Request, res: Response) => {
  const { roomData } = req.body;
  roomServices.insertRoomInfoInBD(roomData, res);
};
const getSingleRoom = (req: Request, res: Response) => {
  const { id } = req.params;
  roomServices.getSingleRoomFromBD(id, res);
};
const getAllRoom = (req: Request, res: Response) => {
  roomServices.getAllRoomFromBD(res);
};

const updateRoom = (req: Request, res: Response) => {
  const { id } = req.params;
  roomServices.updateSingleRoom(id, req.body, res);
};
const deleteRoom = (req: Request, res: Response) => {
  const { id } = req.params;
  roomServices.deleteRoomFromBD(id, res);
};
const roomController = {
  createRoom,
  getSingleRoom,
  getAllRoom,
  updateRoom,
  deleteRoom,
};

export default roomController;
