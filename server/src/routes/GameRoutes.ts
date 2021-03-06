"use strict";
import { Router } from "express";
import { GameController } from "../controllers/GameController";

export function getGameRoutes():Router {
	const router: Router = Router();
	router.get('/', GameController.getAllGames);
	router.post('/insertTest', GameController.insertTest);

	return router;
}
