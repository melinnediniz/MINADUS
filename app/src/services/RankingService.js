import { api } from "../api";

const PATH = "/rankings";

export class RankingService {
    async create(gameId) {
        const createdRanking = await api.post(PATH, { game: gameId });
        return createdRanking;
    }

    async fetchAll() {
        const rankings = await api.get(PATH);
        return rankings;
    }
}
