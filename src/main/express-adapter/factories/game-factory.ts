import { Router } from "express";
import { makeGameControllerFactory } from "../../factories/game-controller-factory";
import { GameRoute } from "../routes/game-route";

export function makeGameFactory(router: Router): GameRoute {
  const gameController = makeGameControllerFactory();
  return new GameRoute(gameController, router);
}
