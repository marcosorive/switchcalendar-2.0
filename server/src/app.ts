import * as cors from "cors";
import * as express from "express";
import * as mongoose from "mongoose";
import { Logger } from "winston";
import { Bootstrap } from "./Bootstrap";


export class App {

    private readonly app: express.Application;
    private readonly logger: Logger;

    constructor() {
        this.app = express();
        this.logger = Bootstrap.logger;
    }

    public startApp(): void {
        this.app.listen(5000, () => {
            new Bootstrap().setup();
            this.config();
        });
    }

    private config(): void {
        this.app.use(cors());
        this.app.disable("x-powered-by");
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());

        // Setting the routes
        this.app.use("/api/games", Bootstrap.gameRoutes);
        this.app.use("/api/users", Bootstrap.userRoutes);

        // Connecting DB
        mongoose.connect("mongodb://localhost:27017/switchcalendar", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
            .then(() => this.logger.log("info","MongoDB Connected!"))
            .catch((error) => this.logger.log("error", "Error connecting MongoDB: " + error));
    }
}
