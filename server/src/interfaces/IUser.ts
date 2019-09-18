import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document{
    name: string;
    email: string;
    password: string;
    joinDate: Date;
    activeAccount: boolean;
}
