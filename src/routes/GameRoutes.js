import { Router } from "express";
import { getCasualGame, getDailyGame } from "../controllers/GameController.js";

const GameRoutes = Router();
const path = "/games";
GameRoutes.get(`${path}/daily`, getDailyGame);
GameRoutes.get(`${path}/casual`, getCasualGame);
export { GameRoutes };
