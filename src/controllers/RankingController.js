import { Ranking } from "../entities/Ranking.js"

async function fetchAll(req, resp) {
    try {
        const rankings = await Ranking.find({})
        return resp.json(rankings)
    } catch (error) {
        return resp.json({ message: "Error on fetch rankings", status: 400 })
    }
}

export {
    fetchAll
}