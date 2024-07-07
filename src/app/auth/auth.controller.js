"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_service_1 = require("./auth.service");
var userSignUp = function (req, res) {
    var userInfo = req.body.userInfo;
    auth_service_1.default.inserUserInfoInDB(userInfo, res);
};
var userLogin = function (req, res) {
    var userInfo = req.body.userInfo;
    auth_service_1.default.authenticUserLogin(userInfo, res);
};
var authController = {
    userSignUp: userSignUp,
    userLogin: userLogin,
};
exports.default = authController;
