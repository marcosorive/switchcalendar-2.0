'use-strict'
import * as mongoose from 'mongoose';
import { IUser } from '../interfaces/IUser';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique:true},
    password: { type: String, required: true},
    joinDate: { type: String, default: Date.now() },
});

export const UserModel = mongoose.model<IUser>("Game", UserSchema);