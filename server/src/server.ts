"use strict";
import { App } from "./app";

try{
    new App().startApp();
} catch (error) {
    console.log("Error in server.js: " + error);
}
