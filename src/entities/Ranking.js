import { Schema, model, ObjectId } from "mongoose";

const schema = new Schema({
    createdAt: { type: Date, default: Date.now },
    game: {
        type: ObjectId,
        ref: "Game",
    },
});

export const Ranking = model("ranking", schema);
