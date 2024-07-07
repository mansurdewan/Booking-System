"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_1 = require("http-status");
var notFound = function (req, res, next) {
    return res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        statusCode: 404,
        message: "No Data Found",
        data: [],
    });
};
exports.default = notFound;
