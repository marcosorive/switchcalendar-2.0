import { Router } from "express";
import { Logger } from "winston";
import { GameRepository } from "./repositories/GameRepository";
import { getGameRoutes } from "./routes/GameRoutes";
import { getUserRoutes } from "./routes/UserRoutes";
import { GameService } from "./services/GameService";
import { switchLogger } from "./utils/logger";

export class Bootstrap {

    // Builder patter for mongooseModel instantiation

    public static gameRoutes: Router;
    public static gameService: GameService;
    public static userRoutes: Router;
    public static logger: Logger;

    constructor() { }

    public setup(): void {

        const gameRepository = new GameRepository();

        const gameService =  new GameService(gameRepository);

        const gameRoutes = getGameRoutes();
        const userRoutes = getUserRoutes();

        Bootstrap.logger = switchLogger;
        Bootstrap.gameRoutes = gameRoutes;
        Bootstrap.gameService = gameService;
        Bootstrap.userRoutes = userRoutes;
    }
}
