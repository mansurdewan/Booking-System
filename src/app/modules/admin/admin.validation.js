"use strict";
// validation.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminSchema = void 0;
var zod_1 = require("zod");
var mongoose_1 = require("mongoose");
var objectId = zod_1.z.instanceof(mongoose_1.Types.ObjectId);
var userNameSchema = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
});
exports.adminSchema = zod_1.z.object({
    id: zod_1.z.string(),
    user: objectId,
    name: userNameSchema,
    dateOfBirth: zod_1.z.optional(zod_1.z.date()),
    email: zod_1.z.string().email(),
    contactNo: zod_1.z.string(),
    presentAddress: zod_1.z.string(),
    permanentAddress: zod_1.z.string(),
    profileImg: zod_1.z.optional(zod_1.z.string()),
    isDeleted: zod_1.z.boolean(),
});
