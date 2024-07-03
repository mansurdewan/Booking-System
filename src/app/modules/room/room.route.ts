import { Router } from "express";
import roomController from "./room.controoler";
import validateRequest from "../../middleware/validateRequest";
import { MeetingRoom } from "./room.model";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constant";
import { meetingRoomSchema } from "./room.validation";

const roomRoute = Router();

roomRoute.post(
  "/create-room",
  auth(USER_ROLE.admin),
  validateRequest(meetingRoomSchema),
  roomController.createRoom
);
roomRoute.get(
  "/:id",
  auth(),
  validateRequest(meetingRoomSchema),
  roomController.getSingleRoom
);
roomRoute.put(
  "/:id",
  auth(USER_ROLE.admin),
  validateRequest(meetingRoomSchema),
  roomController.updateRoom
);
roomRoute.delete(
  "/:id",
  auth(USER_ROLE.admin),
  validateRequest(meetingRoomSchema),
  roomController.deleteRoom
);
export default roomRoute;
