"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controllers_1 = require("../controllers/");
var Router = /** @class */ (function () {
    function Router() {
        this.userController = new controllers_1.UserController();
    }
    Router.prototype.routes = function (app) {
        app.route('/api/users').get(this.userController.getUser);
        app.route('/api/user/:id').get(this.userController.getUserById);
    };
    return Router;
}());
exports.Router = Router;
