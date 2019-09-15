'use strict';
import {Request, Response} from 'express';

export class UserController {

    constructor(){};

    public static register(req: Request, res: Response): Response{
        console.log(req.body);
        res.send("Recevied :)");
    }
    
}
