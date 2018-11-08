"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
var routes_1 = require("./routes/routes");
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.route = new routes_1.Router();
        this.pathToClient = '../client/dist/';
        this.app = express_1.default();
        this.config();
        this.route.routes(this.app);
        this.app.use('*', function (req, res) {
            res.sendFile(path_1.default.join(__dirname, _this.pathToClient + 'index.html'));
        });
    }
    App.prototype.config = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.static(path_1.default.join(__dirname, this.pathToClient)));
    };
    return App;
}());
exports.default = new App().app;
