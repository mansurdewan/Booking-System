"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var room_service_1 = require("./room.service");
var createRoom = function (req, res) {
    var roomData = req.body.roomData;
    room_service_1.default.insertRoomInfoInBD(roomData, res);
};
var getSingleRoom = function (req, res) {
    var id = req.params.id;
    room_service_1.default.getSingleRoomFromBD(id, res);
};
var getAllRoom = function (req, res) {
    room_service_1.default.getAllRoomFromBD(res);
};
var updateRoom = function (req, res) {
    var id = req.params.id;
    room_service_1.default.updateSingleRoom(id, req.body, res);
};
var deleteRoom = function (req, res) {
    var id = req.params.id;
    room_service_1.default.deleteRoomFromBD(id, res);
};
var roomController = {
    createRoom: createRoom,
    getSingleRoom: getSingleRoom,
    getAllRoom: getAllRoom,
    updateRoom: updateRoom,
    deleteRoom: deleteRoom,
};
exports.default = roomController;
