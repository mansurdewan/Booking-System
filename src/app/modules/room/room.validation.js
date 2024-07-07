"use strict";
// validation.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.meetingRoomSchema = void 0;
var zod_1 = require("zod");
exports.meetingRoomSchema = zod_1.z.object({
    name: zod_1.z.string(),
    roomNo: zod_1.z.number(),
    floorNo: zod_1.z.number(),
    capacity: zod_1.z.number(),
    pricePerSlot: zod_1.z.number(),
    amenities: zod_1.z.array(zod_1.z.string()),
    isDeleted: zod_1.z.boolean(),
});
