import express from "express";
import accounts from "./accounts";
import usecase from "./usecase";

const app = express();
app.use(express.json());
// app.use(express.urlencoded())

app.use("/accounts", accounts);
app.use("/usecase", usecase);

export default app;
