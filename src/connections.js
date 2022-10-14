import mongoose from "mongoose";

export function connectWithDB(URL){
    return mongoose.connect(URL);
}