import { Router } from "express";
import { GameControllerInterface } from "../../../presentation/abstract/controllers/game-controller.interface";
export declare class GameRoute {
    gameController: GameControllerInterface;
    router: Router;
    constructor(gameController: GameControllerInterface, router: Router);
    route(): Router;
}
