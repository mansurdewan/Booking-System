import { Router } from "express";
import auth from "../../middleware/auth";
import validateRequest from "../../middleware/validateRequest";
import { Booking } from "./booking.model";
import { USER_ROLE } from "../user/user.constant";
import bookingController from "./booking.controller";
import { bookingSchema } from "./booking.validation";

const bookigRoute = Router();

bookigRoute.post(
  "/create-booking",
  auth(USER_ROLE.user),
  validateRequest(bookingSchema),
  bookingController.createBookingController
);
bookigRoute.get(
  "/bookings",
  auth(USER_ROLE.admin),
  bookingController.getAllBookingController
);
bookigRoute.get(
  "/my-bookings",
  auth(USER_ROLE.user),
  bookingController.getAllUserBookingController
);
bookigRoute.put(
  "/:id",
  auth(USER_ROLE.admin),
  bookingController.updateBookingController
);

export default bookigRoute;
