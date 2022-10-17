import { Ranking } from "../entities/Ranking.js";

async function fetchAll(req, resp) {
  try {
    const rankings = await Ranking.find({});
    return resp.json(rankings);
  } catch (error) {
    return resp.json({ message: "Error on fetch rankings", status: 400 });
  }
}

async function create(req, resp) {
  const { game } = req.body;
  try {
    const createdRanking = await Ranking.create({
      createdAt: Date.now(),
      game,
    });
    return resp.json(createdRanking);
  } catch (error) {
    return resp.json({ message: "Error on create ranking", status: 400 });
  }
}

export { fetchAll, create };
