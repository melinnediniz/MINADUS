import { Schema, model, ObjectId } from 'mongoose'

const schema = new Schema({
    name: { type: String, required: true },
    birthday: { type: Date, required: true },
    time: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
    ranking: {
        type: ObjectId,
        ref: 'Ranking'
    }
})

export const User = model('user', schema)