import express, { Router } from "express";
import cors from "cors";
import { makeApiTestFactory } from "./src/main/express-adapter/factories/apiTest-factory";
import { makeUserFactory } from "./src/main/express-adapter/factories/user-factory";
import { makeAuthFactory } from "./src/main/express-adapter/factories/auth-factory";
import { makeGameFactory } from "./src/main/express-adapter/factories/game-factory";
import { makeProfileFactory } from "./src/main/express-adapter/factories/profile-factory";

const app = express();
const router = Router();

const apiTestFactory = makeApiTestFactory(router);
const userFactory = makeUserFactory(router);
const authFactory = makeAuthFactory(router);
const gameFactory = makeGameFactory(router);
const profileFactory = makeProfileFactory(router);

app.use(express.json());
app.use(cors());

app.use("/", apiTestFactory.route());
app.use("/user", userFactory.route());
app.use("/auth", authFactory.route());
app.use("/game", gameFactory.route());
app.use("/profile", profileFactory.route());

app.listen(3000, () => console.log("http://localhost:3000"));
