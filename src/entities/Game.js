import { Schema, model } from 'mongoose'

const schema = new Schema({
    seed: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

export const Game = model('game', schema)