"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserModel_1 = require("../models/UserModel");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    /**
     * @api {get} /user Get all users
     * @apiName GetUser
     * @apiGroup User
     *
     * @apiParam {Number} id Users unique ID.
     *
     * @apiSuccess {String} firstname Firstname of the User.
     * @apiSuccess {String} lastname  Lastname of the User.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "firstname": "John",
     *       "lastname": "Doe"
     *     }
     *
     * @apiError UserNotFound The id of the User was not found.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "error": "UserNotFound"
     *     }
     */
    UserController.prototype.postUser = function (req, res, next) {
        if (req.params) {
            UserModel_1.default.create(req.body)
                .then(function (data) {
                return res.status(200).json({ data: data });
            })
                .catch(function (error) {
                res.status(500).json({
                    error: error.message,
                    errorStack: error.stack,
                });
                return next(error);
            });
        }
    };
    UserController.prototype.getAllUsers = function (req, res, next) {
        if (req.params) {
            UserModel_1.default.find({
                _id: { $ne: req.params._id },
                role: { $ne: req.params.role },
            })
                .then(function (data) {
                return res.status(200).json({ data: data });
            })
                .catch(function (error) {
                res.status(500).json({
                    error: error.message,
                    errorStack: error.stack,
                });
                return next(error);
            });
        }
        else {
            UserModel_1.default.find({})
                .then(function (data) {
                res.status(200).json({ data: data });
            })
                .catch(function (error) {
                res.status(500).json({
                    error: error.message,
                    errorStack: error.stack,
                });
                next(error);
            });
        }
    };
    UserController.prototype.getUser = function (req, res, next) {
        UserModel_1.default.findOne(req.params)
            .then(function (data) {
            if (!data)
                return res.status(404).json({ error: 'not found' });
            res.status(200).json(data);
        })
            .catch(function (error) {
            res.status(500).json({
                error: error.message,
                errorStack: error.stack,
            });
            next(error);
        });
    };
    UserController.prototype.updateUser = function (req, res, next) {
        var updatePayload = {};
        UserModel_1.default.update(req.params, updatePayload)
            .then(function (update) {
            res.status(200).json({ success: true });
        })
            .catch(function (error) {
            res.status(500).json({
                error: error.message,
                errorStack: error.stack,
            });
            next(error);
        });
    };
    return UserController;
}());
exports.default = new UserController();
//# sourceMappingURL=Users.js.map