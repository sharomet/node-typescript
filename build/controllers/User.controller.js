"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Users_model_1 = require("../models/Users.model");
var Users = mongoose_1.default.model('users', Users_model_1.UserSchema);
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getUser = function (req, res) {
        Users.find({}, function (err, doc) {
            if (err) {
                res.send(err);
            }
            res.json(doc);
        });
    };
    UserController.prototype.getUserById = function (req, res) {
        res.send(req.params.id);
    };
    return UserController;
}());
exports.UserController = UserController;
