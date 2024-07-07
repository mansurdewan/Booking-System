"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModel = void 0;
var mongoose_1 = require("mongoose");
var UserNameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
});
var AdminSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: UserNameSchema, required: true },
    dateOfBirth: { type: Date },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    profileImg: { type: String },
    isDeleted: { type: Boolean, default: false },
});
exports.AdminModel = (0, mongoose_1.model)("Admin", AdminSchema);
