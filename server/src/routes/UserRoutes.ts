import { Router } from "express";
import { UserController } from "../controllers/UserController";

export function getUserRoutes(): Router {
    const router: Router = Router();
    router.post("/register", UserController.register);
    router.post("/login", UserController.login);
    router.post("/confirmEmail", UserController.confirmEmail);
    router.post("/logout", UserController.logout);
    return router;
}
