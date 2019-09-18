import {Request, Response} from "express";

export class UserController {

    /**
     * This method takes the register form and sends a registration email with a confimation link.
     *
     * @param req Express Request to handle.
     * @param res Response to send.
     */
    public static register(req: Request, res: Response): void {
        console.log(req.body);
        res.send("Recevied :)");
    }

    /**
     * This receives the confirmation url and check if everything is correct.
     *
     * @param req Express Request to handle.
     * @param res Response to send.
     */
    public static confirmEmail(req: Request, res: Response): void {
        console.log(req.body);
        res.send("Recevied :)");
    }

    /**
     * This method takes the login form and check if the user/password exist and matches.
     * If it matches, creates a unique sessionID and it gets added to the express-session middlware.
     *
     * @param req Express Request to handle.
     * @param res Response to send.
     */
    public static login(req: Request, res: Response): void {
        console.log(req.body);
        res.send("Recevied :)");
    }

    /**
     * This method logs the user out and deletes the sessionId from the database.
     *
     * @param req Express Request to handle.
     * @param res Response to send.
     */
    public static logout(req: Request, res: Response): void {
        console.log(req.body);
        res.send("Recevied :)");
    }

    // TODO: Add method to remove so a users can delete their accounts.

}
