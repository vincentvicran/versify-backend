"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connections = require("../config/connection");
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    img: { type: String, required: false },
    role: { type: String, required: true },
}, {
    collection: "User",
    versionKey: false,
    timestamps: true,
});
exports.default = connections.db.model("UserModel", UserSchema);
//# sourceMappingURL=UserModel.js.map