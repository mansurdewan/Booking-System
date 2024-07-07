"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var currentDirectory = process.cwd();
var dotenv_1 = require("dotenv");
var updatedPath = path_1.default.join(currentDirectory, ".env");
dotenv_1.default.config({ path: updatedPath });
exports.default = {
    port: process.env.PORT,
    database_url: process.env.MONGODB_URL,
    bcrypt_salt_rounds: process.env.SALT_ROUNDS,
    default_password: process.env.DEFAULT_PASS,
    jwt_secret: process.env.JWT_SECRET,
};
