import { Router } from "express";
import {create, findByRankingId} from "../controllers/UserController.js";

const UserRoutes = Router();
const path = "/users";
UserRoutes.post(path, create);
UserRoutes.get(path, findByRankingId);
export {UserRoutes};