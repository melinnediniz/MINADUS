import { Router } from "express";

const DefaultRoutes = Router();
DefaultRoutes.get("/", (req, resp) => {
  return resp.json({
    message: "Welcome to Minadus API",
    date: new Date(),
  });
});
export { DefaultRoutes };
