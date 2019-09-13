"use strict"
import * as mongoose from 'mongoose';

export interface IGame extends mongoose.Document{
    name: string;
    releaseDate: Date;
}
