import { Request, Response } from 'express';

import { UserController } from '../controllers/';

export class Router {

    public userController: UserController = new UserController();

    public routes(app: any): void {

        app.route('/api/users').get(this.userController.getUser);
        app.route('/api/user/:id').get(this.userController.getUserById);

    }

}