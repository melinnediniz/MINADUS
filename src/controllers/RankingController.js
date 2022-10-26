import { Ranking } from "../entities/Ranking.js";
import { Game } from "../entities/Game.js";
import { User } from "../entities/User.js";
import { getDailySeed } from "./GameController.js";

async function fetchUsers(req, resp) {
    const { level } = req.query;
    try {
        const game = await Game.findOne({ level, seed: getDailySeed() });
        if (game === null) return resp.json([]);

        const ranking = await Ranking.findOne({ game: game.id });
        if (ranking === null) return resp.json([]);

        const users = await User.find({
            ranking: ranking.id,
        }).sort({ time: -1 });
        return resp.json(users);
    } catch (error) {
        return resp.json({
            message: "Error on fetch users of ranking",
            status: 400,
        });
    }
}

export { fetchUsers };
