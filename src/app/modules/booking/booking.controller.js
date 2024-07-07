"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var booking_service_1 = require("./booking.service");
var createBookingController = function (req, res) {
    var bookingData = req.body.bookingData;
    booking_service_1.default.inserBookingInDB(bookingData, res);
};
var getAllBookingController = function (req, res) {
    booking_service_1.default.getAllBookingFromDB(res);
};
var getAllUserBookingController = function (req, res) {
    booking_service_1.default.getAllUserBookingFromDB(res);
};
var updateBookingController = function (req, res) {
    var updateData = req.body.updateData;
    var id = req.params.id;
    booking_service_1.default.updateBookingFromDB(id, updateData, res);
};
var bookingController = {
    createBookingController: createBookingController,
    getAllBookingController: getAllBookingController,
    getAllUserBookingController: getAllUserBookingController,
    updateBookingController: updateBookingController,
};
exports.default = bookingController;
