import { Router } from "express";
import { getDailyGame } from "../controllers/GameController";

const GameRoutes = Router();
const path = "/games";
GameRoutes.get(`${path}/daily`, getDailyGame);
export { GameRoutes };
