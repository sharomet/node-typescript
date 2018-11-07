import express from 'express';

import { Router } from './routes/routes'

class App {
    public app: express.Application;
    public route: Router = new Router();

    constructor() {
        this.app = express();
        this.config();        
        this.route.routes(this.app);     
    }

    private config(): void {
        //this.app.use('/api', Router);
        /*this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));*/
    }
}

export default new App().app;