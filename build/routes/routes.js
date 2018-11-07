"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_controller_1 = require("../controllers/User.controller");
/*const router: express.Router = express.Router();

router.get('/user', (req: Request, res: Response) => {
    let user = new UserController();
    res.send(user.getUser());
});*/
var Router = /** @class */ (function () {
    function Router() {
        this.userController = new User_controller_1.UserController();
    }
    Router.prototype.routes = function (app) {
        app.route('/user').get(this.userController.getUser);
        app.route('/user/:id').get(this.userController.getUserById);
    };
    return Router;
}());
exports.Router = Router;
