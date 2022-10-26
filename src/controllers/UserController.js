import { User } from "../entities/User";

async function create(req, resp, {name, time}) {
    const { game } = req.body;
    try {
      const createdUser = await User.create({
        name: name,
        time: time,
        createdAt: Date.now(),
        ranking,
      });
      return resp.json(createdUser);
    } catch (error) {
      return resp.json({ message: "Error on registering user", status: 400 });
    }
  }

async function findByRankingId(req, resp) {
    const id = req.ranking;

        User.findById(id, (err, User) => {
            if(err) {
                resp.status(400).send({message: `${err.message} - user not found`})
            } else {
                resp.status(200).send(User);
            }
        })
}

export {create, findByRankingId};