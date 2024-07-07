"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_1 = require("http-status");
var sendResponse_1 = require("../../utils/sendResponse");
var room_model_1 = require("./room.model");
var insertRoomInfoInBD = function (payload, res) { return __awaiter(void 0, void 0, void 0, function () {
    var roomData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, room_model_1.MeetingRoom.create(payload)];
            case 1:
                roomData = _a.sent();
                (0, sendResponse_1.sendResponse)(res, {
                    status: http_status_1.default.OK,
                    success: true,
                    message: "Room added successfully",
                    data: roomData,
                });
                return [2 /*return*/];
        }
    });
}); };
var getSingleRoomFromBD = function (id, res) { return __awaiter(void 0, void 0, void 0, function () {
    var singleRoomData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, room_model_1.MeetingRoom.findById(id)];
            case 1:
                singleRoomData = _a.sent();
                (0, sendResponse_1.sendResponse)(res, {
                    status: http_status_1.default.OK,
                    success: true,
                    message: "Room retrieved successfully",
                    data: singleRoomData,
                });
                return [2 /*return*/];
        }
    });
}); };
var getAllRoomFromBD = function (res) { return __awaiter(void 0, void 0, void 0, function () {
    var allRoomData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, room_model_1.MeetingRoom.find()];
            case 1:
                allRoomData = _a.sent();
                (0, sendResponse_1.sendResponse)(res, {
                    status: http_status_1.default.OK,
                    success: true,
                    message: "All Room retrieved successfully",
                    data: allRoomData,
                });
                return [2 /*return*/];
        }
    });
}); };
var updateSingleRoom = function (id, payload, res) { return __awaiter(void 0, void 0, void 0, function () {
    var singleRoomData, updatedRoom;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, room_model_1.MeetingRoom.findById(id)];
            case 1:
                singleRoomData = _a.sent();
                if (!singleRoomData) {
                    throw new Error("The room is not exits");
                }
                return [4 /*yield*/, room_model_1.MeetingRoom.findByIdAndUpdate(id, payload, {
                        new: true,
                    })];
            case 2:
                updatedRoom = _a.sent();
                (0, sendResponse_1.sendResponse)(res, {
                    status: http_status_1.default.OK,
                    success: true,
                    message: "Room  updated successfully",
                    data: updatedRoom,
                });
                return [2 /*return*/];
        }
    });
}); };
var deleteRoomFromBD = function (id, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, room_model_1.MeetingRoom.findByIdAndDelete(id)];
            case 1:
                deletedData = _a.sent();
                (0, sendResponse_1.sendResponse)(res, {
                    status: http_status_1.default.OK,
                    success: true,
                    message: "Room  deleted successfully",
                    data: deletedData,
                });
                return [2 /*return*/];
        }
    });
}); };
var roomServices = {
    insertRoomInfoInBD: insertRoomInfoInBD,
    getSingleRoomFromBD: getSingleRoomFromBD,
    getAllRoomFromBD: getAllRoomFromBD,
    updateSingleRoom: updateSingleRoom,
    deleteRoomFromBD: deleteRoomFromBD,
};
exports.default = roomServices;
