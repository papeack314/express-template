import { Request, Response, NextFunction } from "express";

export const getRootController = (
  req: Request,
  resp: Response,
  next: NextFunction
): void => {
  resp.send("This is accounts root endpoint.");
};
