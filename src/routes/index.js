import { Router } from "express";
import { DefaultRoutes } from "./DefaultRoutes.js";
import { GameRoutes } from "./GameRoutes.js";
import { RankingRoutes } from "./RankingRoutes.js";
import { UserRoutes } from "./UserRoutes.js";

const Routes = Router();
Routes.use(DefaultRoutes, RankingRoutes, GameRoutes, UserRoutes);
export { Routes };
