"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("../../middleware/auth");
var user_constant_1 = require("../user/user.constant");
var validateRequest_1 = require("../../middleware/validateRequest");
var slot_controller_1 = require("./slot.controller");
var slot_validation_1 = require("./slot.validation");
var slotRoute = (0, express_1.Router)();
slotRoute.post("/create-slot", (0, auth_1.default)(user_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(slot_validation_1.slotSchema), slot_controller_1.default.createSlotController);
slotRoute.get("/availability", (0, auth_1.default)(), slot_controller_1.default.getAllSlotController);
exports.default = slotRoute;
