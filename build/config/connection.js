"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var connectOptions = {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "VersifyDB",
};
// const MONGO_URI: string = `${config.envConfig.database.MONGODB_URI}${config.envConfig.database.MONGODB_DB_MAIN}`;
var MONGO_URI = "mongodb+srv://vincentvicran:VINcent98&^@versify-cluster.iywnl.mongodb.net/VersifyDB?retryWrites=true&w=majority";
exports.db = mongoose.createConnection(MONGO_URI, connectOptions);
// handlers
exports.db.on("connecting", function () {
    console.log("\x1b[32m", "MongoDB :: connecting");
});
exports.db.on("error", function (error) {
    console.log("\x1b[31m", "MongoDB :: connection " + error);
    mongoose.disconnect();
});
exports.db.on("connected", function () {
    console.log("\x1b[32m", "MongoDB :: connected");
});
exports.db.once("open", function () {
    console.log("\x1b[32m", "MongoDB :: connection opened");
});
exports.db.on("reconnected", function () {
    // console.log('\x1b[33m"', 'MongoDB :: reconnected');
});
exports.db.on("reconnectFailed", function () {
    console.log("\x1b[31m", "MongoDB :: reconnectFailed");
});
exports.db.on("disconnected", function () {
    console.log("\x1b[31m", "MongoDB :: disconnected");
});
exports.db.on("fullsetup", function () {
    console.log('\x1b[33m"', "MongoDB :: reconnecting... %d");
});
//# sourceMappingURL=connection.js.map