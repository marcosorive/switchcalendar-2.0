"use strict"
import {GameRepository} from'../repositories/GameRepository';
import { IGame } from '../interfaces/IGame'

export class GameService{

    constructor(private gameRepository: GameRepository){}

    public async getAllGames(): Promise<IGame[]>{
        return await this.gameRepository.getAllGames();
    }
 
    public insertTest(){
        this.gameRepository.insertTest();
    }

}