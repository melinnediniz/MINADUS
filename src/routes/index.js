import { Router } from "express";
import { DefaultRoutes } from "./DefaultRoutes.js";
import { RankingRoutes } from "./RankingRoutes.js";

const Routes = Router();
Routes.use(DefaultRoutes, RankingRoutes);
export { Routes };
