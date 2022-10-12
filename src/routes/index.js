import { Router } from "express";
import { DefaultRoutes } from "./DefaultRoutes.js";

const Routes = Router();
Routes.use(DefaultRoutes);
export { Routes };
