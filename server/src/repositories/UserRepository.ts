import {hash} from "bcryptjs";
import * as mongoose from "mongoose";
import { Bootstrap } from "../Bootstrap";
import { IUser } from "../interfaces/IUser";

export class UserRepository {

    constructor(private User: mongoose.Model<IUser>) { }

    public async getUserWithUserName(username: string): Promise<IUser> {
        return await this.User.findOne( {name: username} );
    }

    public async getUserWithEmail(email: string): Promise<IUser> {
        return await this.User.findOne( {email: email} );
    }

    public addUser(username: string, email: string, pass: string): IUser {
        try{
            let user = undefined;
            hash(pass, "lskdfjañsdlifjs01284fusad8fs0__^%^¨&¿?=", async (err: Error, hash: string) => {
                if (err) {
                    Bootstrap.logger.log("error", "Error hashing passowrd: " + err);
                    return undefined;
                } else {
                    user = await this.User.create({name: username, email: email, password: hash});
                }
            });
            return  user;
        } catch (error) {
            Bootstrap.logger.log("error", "UserRepository (addUser): " + error);
            // throw new Error("Error hashing password");
            return undefined;
        }
    }

}