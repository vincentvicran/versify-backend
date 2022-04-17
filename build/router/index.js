"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var UserRouter_1 = require("./UserRouter");
var JwtToken_1 = require("../services/JwtToken");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.init = function (server) {
        var router = express.Router();
        server.app.use('/', router);
        server.app.use('/api/verify', JwtToken_1.default.verifyRequestAuth);
        server.app.use('/api/users', new UserRouter_1.default().router);
        server.app.use('/api/users/login', new UserRouter_1.default().router);
    };
    return Routes;
}());
exports.default = Routes;
//# sourceMappingURL=index.js.map