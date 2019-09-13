"use strict";
import * as express from "express";
import * as cors from 'cors';
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import { Bootstrap } from "./Bootstrap";


export class App {

    private readonly app: express.Application;

    constructor() {
        this.app = express();
    }

    public startApp(): void {
        this.app.listen(5000, () => {
            new Bootstrap().setup();
            this.config();
        });
    }

    private config(): void {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false}));
        //Setting the routes
        this.app.use('/api/games', Bootstrap.gameRoutes);
        //Connecting DB
        mongoose.connect('mongodb://localhost:27017/switchcalendar', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
            .then(() => console.log("MongoDB Connected!"))
            .catch((error) => console.log("Error connecting MongoDB: " + error));
    }
}
