import * as mongoose from "mongoose";
import {IGame} from "../interfaces/IGame";

const GameSchema = new mongoose.Schema({
    name: { type: String, required: true },
    releaseDate: { type: Date, required: true},
    // Add all the other fields + uuid.
});

export const GameModel = mongoose.model<IGame>("Game", GameSchema);