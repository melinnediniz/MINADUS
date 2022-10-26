import { api } from "../api";

const PATH = "/users";

export class UserService {
    async create(user, level = "easy") {
        const { data: createUser } = await api.post(
            `${PATH}?level=${level}`,
            user
        );
        return createUser;
    }
}
