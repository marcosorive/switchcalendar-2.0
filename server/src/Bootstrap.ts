import { Router } from "express";
import { Logger } from "winston";
import { GameModel } from "./models/Game";
import { UserModel } from "./models/User";
import { GameRepository } from "./repositories/GameRepository";
import { UserRepository } from "./repositories/UserRepository";
import { getGameRoutes } from "./routes/GameRoutes";
import { getUserRoutes } from "./routes/UserRoutes";
import { GameService } from "./services/GameService";
import { UserService } from "./services/UserService";
import { switchLogger } from "./utils/logger";

export class Bootstrap {

    // Builder patter for mongooseModel instantiation

    public static userService: UserService;
    public static gameRoutes: Router;
    public static gameService: GameService;
    public static userRoutes: Router;
    public static logger: Logger;

    constructor() { }

    public setup(): void {

        const userRepository = new UserRepository(UserModel);
        const userService = new UserService(userRepository);
        const gameRepository = new GameRepository(GameModel);
        const gameService =  new GameService(gameRepository);

        const gameRoutes = getGameRoutes();
        const userRoutes = getUserRoutes();

        Bootstrap.userService = userService;
        Bootstrap.logger = switchLogger;
        Bootstrap.gameRoutes = gameRoutes;
        Bootstrap.gameService = gameService;
        Bootstrap.userRoutes = userRoutes;
    }
}
