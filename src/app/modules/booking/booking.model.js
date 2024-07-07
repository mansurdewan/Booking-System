"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
var mongoose_1 = require("mongoose");
var bookingSchema = new mongoose_1.Schema({
    room: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "Room is required!"],
        unique: true,
    },
    slots: {
        type: [mongoose_1.Schema.Types.ObjectId],
        required: [true, "Room is required!"],
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "user info is required!"],
    },
    totalAmount: { type: Number, required: true },
    isConfirmed: {
        type: Boolean,
        enum: ["confirmed", "unconfirmed", "canceled"],
        required: true,
    },
});
exports.Booking = (0, mongoose_1.model)("Booking", bookingSchema);
