import express from "express";
import { getRootController } from "./controllers/rootController";

const router = express.Router();

router.get("/", getRootController);

export default router;
