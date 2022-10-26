import { Router } from "express";
import { fetchUsers } from "../controllers/RankingController.js";

const RankingRoutes = Router();
const path = "/rankings";
RankingRoutes.get(`${path}/users`, fetchUsers);
export { RankingRoutes };
