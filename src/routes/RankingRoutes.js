import { Router } from "express";
import { create, fetchAll } from "../controllers/RankingController.js";

const RankingRoutes = Router();
const path = "/rankings";
RankingRoutes.get(path, fetchAll);
RankingRoutes.post(path, create);
export { RankingRoutes };
