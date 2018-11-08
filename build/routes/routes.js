"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_controller_1 = require("../controllers/User.controller");
var Router = /** @class */ (function () {
    function Router() {
        this.userController = new User_controller_1.UserController();
    }
    Router.prototype.routes = function (app) {
        app.route('/api/user').get(this.userController.getUser);
        app.route('/api/user/:id').get(this.userController.getUserById);
    };
    return Router;
}());
exports.Router = Router;
