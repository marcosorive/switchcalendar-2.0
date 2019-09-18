"use strict"
import * as mongoose from "mongoose";
import { IGame } from "../interfaces/IGame";

const GameSchema = new mongoose.Schema({
    name: { type: String, required: true },
    releaseDate: { type: Date, required: true},
    // Add all the other fields + uuid.
});

const GameMongoose = mongoose.model<IGame>("Game", GameSchema);

export class GameRepository{

    constructor(private Game = GameMongoose) { }

    public async getAllGames(): Promise<IGame[]> {
        try{
            const games =  await this.Game.find({});
            return await games;
        }
        catch(error){
            // Bootstrap.logger.log("error","ModelRepository: (getAll) " + error);
            throw new Error(error.message);
        }
    }

    public async insertTest(): Promise<void>{
        try {
            this.Game.insertMany([{name: "The legend of Zelda: Breath of the wild", releaseDate: new Date("2017-03-03")},{name: "1-2-Switch", releaseDate: new Date("2017-03-03")}]);
        }
        catch (error) {
            // Bootstrap.logger.log("error","ModelRepository: (getAll) " + error);
            throw new Error(error.message);
        }
    }

}