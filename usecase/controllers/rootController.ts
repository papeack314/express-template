import { Request, Response, NextFunction } from "express";

export const getRootController = (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  resp.send("This is usecase root endpoint.");
};
