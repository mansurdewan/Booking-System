"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot = void 0;
var mongoose_1 = require("mongoose");
var slotSchema = new mongoose_1.Schema({
    room: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "MeetingRoom",
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    isBooked: {
        type: Boolean,
        default: false,
    },
});
exports.Slot = (0, mongoose_1.model)("Slot", slotSchema);
