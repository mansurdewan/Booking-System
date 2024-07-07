"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var room_route_1 = require("../modules/room/room.route");
var booking_route_1 = require("../modules/booking/booking.route");
var slot_route_1 = require("../modules/slot/slot.route");
var user_route_1 = require("../modules/user/user.route");
var router = (0, express_1.Router)();
var routeModules = [
    {
        path: "/rooms",
        route: room_route_1.default,
    },
    {
        path: "/booking",
        route: booking_route_1.default,
    },
    {
        path: "/slot",
        route: slot_route_1.default,
    },
    {
        path: "/user",
        route: user_route_1.default,
    },
];
routeModules.forEach(function (route) { return router.use(route.path, route.route); });
exports.default = router;
