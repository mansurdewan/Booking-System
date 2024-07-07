"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingSchema = void 0;
var zod_1 = require("zod");
var mongoose_1 = require("mongoose");
var objectId = zod_1.z.instanceof(mongoose_1.Types.ObjectId);
exports.bookingSchema = zod_1.z.object({
    room: objectId,
    slots: zod_1.z.array(objectId),
    user: objectId,
    totalAmount: zod_1.z.number(),
    isConfirmed: zod_1.z.boolean(),
});
