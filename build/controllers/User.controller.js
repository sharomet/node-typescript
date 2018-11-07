"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getUser = function (req, res) {
        res.send('user');
    };
    UserController.prototype.getUserById = function (req, res) {
        res.send(req.params.id);
    };
    return UserController;
}());
exports.UserController = UserController;
