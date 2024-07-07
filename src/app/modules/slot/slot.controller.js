"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var slot_service_1 = require("./slot.service");
var createSlotController = function (req, res) {
    var slotData = req.body.slotData;
    slot_service_1.default.inserSlotInDB(slotData, res);
};
var getAllSlotController = function (req, res) {
    var slotsData = req.body.slotsData;
    slot_service_1.default.getAllSlotsFromDB(slotsData.isBooked, res);
};
var slotController = {
    createSlotController: createSlotController,
    getAllSlotController: getAllSlotController,
};
exports.default = slotController;
