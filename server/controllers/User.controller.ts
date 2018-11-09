import mongoose from 'mongoose';
import { Request, Response } from 'express';

import { UserSchema, IUser } from '../models/Users.model';

const Users = mongoose.model<IUser>('users', UserSchema);

export class UserController {

    public getUser(req: Request, res: Response) {
        Users.find({}, (err, doc) => {
            if(err) {
                res.send(err);
            }
            res.json(doc);
        });
    }

    public getUserById(req: Request, res: Response) {
        res.send(req.params.id);
    }

}