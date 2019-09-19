import {Request, Response} from "express";
import {Bootstrap} from "../Bootstrap";
import {IUser} from "../interfaces/IUser";

export class UserController {

    /**
     * This method takes the register form and sends a registration email with a confimation link.
     *
     * @param req Express Request to handle.
     * @param res Response to send.
     */
    public static async  register(req: Request, res: Response): Promise<void> {
        try {
            if (await Bootstrap.userService.usernameExists(req.body.name)) {
            res.status(400).send({Messages: ["Username already exists"]});
            return;
            }
            if (await Bootstrap.userService.emailExists(req.body.email)) {
                res.status(400).send({Messages: ["Email already exists"]});
                return;
            }
            const addedUser: IUser = await Bootstrap.userService.addUser(req.body.name, req.body.email, req.body.pass1);
            if (await addedUser === undefined) {
                res.status(400).send({Messages: ["There has been an error registering, please try again later."]});
                return;
            }
            Bootstrap.userService.sendConfirmationEmail(addedUser);
            res.status(200).send("Looks like ok");
        } catch (error) {
            res.status(500).send({Messages: ["Fatal error, pelase try again later"]});
        }
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
