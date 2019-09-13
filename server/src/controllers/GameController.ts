"use strict"
import { Request, Response } from "express";
import {Bootstrap} from '../Bootstrap';

export class GameController{

    public static async getAllGames(req: Request, res: Response): Promise<Response>{
        try{
            console.log(req)
            res.send( await Bootstrap.gameService.getAllGames());
        }catch(error){
            console.log(req);
            console.log(error);
        }
    }

    public static insertTest(req: Request, res: Response): void{
        try{
            Bootstrap.gameService.insertTest();
            res.send("Inserted ok!")
        }catch(error){
            console.log(req);
            console.log(error);
        }
    }
}