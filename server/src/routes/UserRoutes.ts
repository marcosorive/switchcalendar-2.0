import { Router } from "express";
import { UserController } from "../controllers/UserController";

export function getUserRoutes(): Router {
    const router: Router = Router();
    router.post("/register", UserController.register);
    return router;
}
