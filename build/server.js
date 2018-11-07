"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var port = process.env.PORT || 3000;
/*const app: express.Application = express();

const port: any = process.env.PORT || 3000;

app.use('/api', Router);

//app.use('/welcome', WelcomeController);
*/
app_1.default.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
