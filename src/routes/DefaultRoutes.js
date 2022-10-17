import { Router } from "express";

const DefaultRoutes = Router();
const path = '/'
DefaultRoutes.get(path, (req, resp) => {
  return resp.json({
    message: "Welcome to Minadus API",
    date: new Date(),
  });
});
export { DefaultRoutes };
