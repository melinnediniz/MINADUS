const PATH = "/users";

export class UserService {
    async create(user, level = "easy") {
        return {};
    }

    async fetchUsersByRankingId(rankingId) {
        if (!rankingId) return [];
        return [
            {
                name: "Gabriel Lima",
                time: 200,
            },
            {
                name: "Melinne Diniz",
                time: 100,
            },
        ];
    }
}
