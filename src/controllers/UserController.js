import { Game } from "../entities/Game.js";
import { Ranking } from "../entities/Ranking.js";
import { User } from "../entities/User.js";
import { getDailySeed } from "./GameController.js";

async function create(req, resp) {
    const { name, time } = req.body;
    const { level } = req.query;
    try {
        let game = await Game.findOne({ level, seed: getDailySeed() });
        if (game === null)
            game = await Game.create({
                seed: getDailySeed(),
                level: level,
                createdAt: Date.now(),
            });

        let ranking = await Ranking.findOne({ game: game.id });

        if (ranking === null)
            ranking = await Ranking.create({
                createdAt: Date.now(),
                game: game.id,
            });

        const createdUser = await User.create({
            name: name,
            time: time,
            createdAt: Date.now(),
            ranking: ranking.id,
        });
        return resp.json(createdUser);
    } catch (error) {
        console.log(error);
        return resp.json({ message: "Error on registering user", status: 400 });
    }
}

export { create };
