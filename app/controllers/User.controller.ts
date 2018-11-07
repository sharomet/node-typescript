import { Request, Response } from 'express';

export class UserController {

    public getUser(req: Request, res: Response) {
        res.send('user');
    }

    public getUserById(req: Request, res: Response) {
        res.send(req.params.id);
    }

}