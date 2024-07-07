"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotSchema = void 0;
var zod_1 = require("zod");
var mongoose_1 = require("mongoose");
var objectId = zod_1.z.instanceof(mongoose_1.Types.ObjectId);
exports.slotSchema = zod_1.z.object({
    room: objectId.refine(function (obj) { return obj instanceof mongoose_1.Types.ObjectId; }, {
        message: "Invalid ObjectId",
    }),
    date: zod_1.z.date(),
    startTime: zod_1.z.string().refine(function (val) { return /\d{2}:\d{2}/.test(val); }, {
        message: "Invalid time format, should be HH:MM",
    }),
    endTime: zod_1.z.string().refine(function (val) { return /\d{2}:\d{2}/.test(val); }, {
        message: "Invalid time format, should be HH:MM",
    }),
    isBooked: zod_1.z.boolean().default(false),
});
