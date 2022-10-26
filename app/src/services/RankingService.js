import { api } from "../api";

const PATH = "/rankings";

export class RankingService {
    async fetchUsers(level = "easy") {
        const { data: users } = await api.get(`${PATH}/users?level=${level}`);
        return users;
    }
}
