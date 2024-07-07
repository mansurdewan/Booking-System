"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("./user.service");
var createAdmin = function (req, res) {
    var adminData = req.body.adminData;
    user_service_1.default.insertAdminInfoInDB(adminData, res);
};
var createUser = function (req, res) {
    var userData = req.body.userData;
    user_service_1.default.insertUserInfoInDB(userData, res);
};
var userController = {
    createAdmin: createAdmin,
    createUser: createUser,
};
exports.default = userController;
