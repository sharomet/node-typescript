import { Request, Response } from 'express';

import { UserController } from '../controllers/User.controller';

/*const router: express.Router = express.Router();

router.get('/user', (req: Request, res: Response) => {
    let user = new UserController();
    res.send(user.getUser());
});*/

export class Router {

    public userController: UserController = new UserController();

    public routes(app: any): void {
        app.route('/user').get(this.userController.getUser);
        app.route('/user/:id').get(this.userController.getUserById);

    }



}