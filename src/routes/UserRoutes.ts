import express from "express";
const routes = express.Router();

routes.get("/user/:id", (_req, res) => {
  res.json({ id: 1, name: "John Doe" });
});

export default routes;
