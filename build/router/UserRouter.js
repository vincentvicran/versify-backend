"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Users_1 = require("../controllers/Users");
var express_1 = require("express");
/**
 * @export
 * @class UserRouter
 */
var UserRouter = /** @class */ (function () {
    function UserRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    /**
     * @memberof UserRouter
     */
    UserRouter.prototype.routes = function () {
        this.router.post("/post", Users_1.default.postUser);
        this.router.get("/", Users_1.default.getAllUsers);
        this.router.get("/:_id", Users_1.default.getAllUsers);
        this.router.get("/:_id", Users_1.default.getUser);
        this.router.get("/login/:name", Users_1.default.getUser);
        this.router.get("/:_id/:role", Users_1.default.getAllUsers);
    };
    return UserRouter;
}());
exports.default = UserRouter;
//# sourceMappingURL=UserRouter.js.map