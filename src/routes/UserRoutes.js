import { Router } from "express";
import { create } from "../controllers/UserController.js";

const UserRoutes = Router();
const path = "/users";
UserRoutes.post(path, create);
export { UserRoutes };
