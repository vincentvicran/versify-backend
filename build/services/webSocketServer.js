"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var WebSockets = /** @class */ (function () {
    function WebSockets() {
    }
    WebSockets.init = function (server) {
        var WebSocketServer = require("websocket").server;
        this.wss = new WebSocketServer({
            "httpServer": server
        });
        this.wss.on("request", function (request) {
            console.log("Websocket request received.");
            var connection = request.accept(null, request.origin);
            WebSockets.connections.push(connection);
            var senderid = request.httpRequest.url.split("/")[2];
            connection.userID = senderid;
            connection.on("open", function () {
                console.log("Server socket Connection opened.");
            });
            connection.on("close", function () {
                console.log("Server socket Connection closed.");
            });
            connection.on('message', function (message) {
                var msgData = JSON.parse(message.utf8Data);
                // Create a new ID for new chat
                if (msgData.chatId === undefined) {
                    msgData.chatId = uuid_1.v4();
                }
                msgData.messageId = uuid_1.v4();
                // Send message to Recipient Connection and the sender as well.
                WebSockets.connections.map(function (conn) {
                    if (conn.userID == msgData.receiverid || conn.userID == msgData.senderid) {
                        conn.send(JSON.stringify(msgData));
                    }
                });
            });
        });
    };
    WebSockets.connections = [];
    return WebSockets;
}());
exports.default = WebSockets;
//# sourceMappingURL=webSocketServer.js.map