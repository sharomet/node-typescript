import { Request, Response } from 'express';

import { UserController } from '../controllers/User.controller';

export class Router {

    public userController: UserController = new UserController();

    public routes(app: any): void {
        app.route('/user').get(this.userController.getUser);
        app.route('/user/:id').get(this.userController.getUserById);

    }

}