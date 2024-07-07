"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var routes_1 = require("./app/routes/routes");
var app = (0, express_1.default)();
var dotenv_1 = require("dotenv");
var notFoundHandler_1 = require("./app/middleware/notFoundHandler");
dotenv_1.default.config();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application level routes
app.use("/api", routes_1.default);
// global eroor handler whith middleware
// app.use(globalEroorHandler);
// // notFound  handler
app.use(notFoundHandler_1.default);
exports.default = app;
