"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes/routes");
var App = /** @class */ (function () {
    function App() {
        this.route = new routes_1.Router();
        this.app = express_1.default();
        this.config();
        this.route.routes(this.app);
    }
    App.prototype.config = function () {
        //this.app.use('/api', Router);
        /*this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));*/
    };
    return App;
}());
exports.default = new App().app;
