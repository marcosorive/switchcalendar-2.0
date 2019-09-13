"use strict";

import { getGameRoutes } from "./routes/GameRoutes";
import { GameRepository } from "./repositories/GameRepository";
import { GameService } from "./services/GameService";
// import { FileModelService } from "./services/FileModelService";
// import { ImageService } from "./services/ImageService";
// import {logger} from './utils/logger';
// import {Logger} from 'winston';
import { Router } from "express";


export class Bootstrap {

    //Builder patter for mongooseModel instantiation

    public static gameRoutes: Router;
    public static gameService: GameService;
    // public static fileModelService: FileModelService;
    // public static imageService: ImageService;
    // public static logger: Logger;

    constructor() { }

    public setup(): void {
        
        const gameRepository = new GameRepository();
        // const fileModelService = new FileModelService(modelRepository);
        // const imageService =  new ImageService(modelRepository);
        const gameService =  new GameService(gameRepository);

        const gameRoutes = getGameRoutes();

        Bootstrap.gameRoutes = gameRoutes;
        Bootstrap.gameService = gameService;
        // Bootstrap.fileModelService = fileModelService;
        // Bootstrap.imageService = imageService;
        // Bootstrap.logger = logger;

    }
}
