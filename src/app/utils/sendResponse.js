"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
var sendResponse = function (res, data) {
    res.status(data.status).json({
        status: data.status,
        success: data.success,
        data: data.data,
    });
};
exports.sendResponse = sendResponse;
