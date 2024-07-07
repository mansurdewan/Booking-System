"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingRoom = void 0;
var mongoose_1 = require("mongoose");
var meetingRoomSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    roomNo: {
        type: Number,
        required: true,
        unique: true,
    },
    floorNo: {
        type: Number,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    pricePerSlot: {
        type: Number,
        required: true,
    },
    amenities: {
        type: [String],
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});
exports.MeetingRoom = (0, mongoose_1.model)("MeetingRoom", meetingRoomSchema);
