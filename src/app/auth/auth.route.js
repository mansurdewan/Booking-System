"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = require("./auth.controller");
var userRouter = (0, express_1.Router)();
userRouter.post("/auth/signup", auth_controller_1.default.userSignUp);
userRouter.post("/auth/login", auth_controller_1.default.userLogin);
