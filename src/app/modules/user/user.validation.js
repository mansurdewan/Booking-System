"use strict";
// validation.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
var zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
    phone: zod_1.z.number(),
    address: zod_1.z.string(),
    role: zod_1.z.enum(["admin", "user"]),
});
