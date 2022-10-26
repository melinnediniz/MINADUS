import { Schema, model, ObjectId } from "mongoose";

const schema = new Schema({
    name: { type: String, required: true },
    time: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    ranking: {
        type: ObjectId,
        ref: "Ranking",
    },
});

export const User = model("user", schema);
