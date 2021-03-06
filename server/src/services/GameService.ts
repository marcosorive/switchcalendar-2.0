"use strict"
import { IGame } from "../interfaces/IGame";
import {GameRepository} from"../repositories/GameRepository";

export class GameService{

    constructor(private gameRepository: GameRepository) {}

    public async getAllGames(): Promise<IGame[]> {
        return await this.gameRepository.getAllGames();
    }

    public insertTest() {
        this.gameRepository.insertTest();
    }

}