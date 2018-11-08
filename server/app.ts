import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

import { Router } from './routes/routes'

class App {
    public app: express.Application;
    public route: Router = new Router();
    public pathToClient = '../client/dist/';

    constructor() {
        this.app = express();
        this.config();        
        this.route.routes(this.app);
        this.app.use('*', (req, res) => {
            res.sendFile(path.join(__dirname, this.pathToClient + 'index.html'));
        }); 
    }

    private config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, this.pathToClient)));
    }
}

export default new App().app;