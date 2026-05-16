import express, { Router } from "express";

const appRouter = Router();

appRouter.post("/signup", (req, res) => {
  res.status(200).json({
    message: "You are in signup page",
  });
});

export default appRouter;
