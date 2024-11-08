import { Express } from "express";
import UserRoutes from "./UserRoutes";

const routes = (app: Express) => {
  app.use("/api", UserRoutes);
};

export default routes;
