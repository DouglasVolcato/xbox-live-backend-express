import { Request, Response, Router } from "express";
import { GameControllerInterface } from "../../../presentation/abstract/controllers/game-controller.interface";
import { HttpRequestHandler } from "../../../utils/handlers/http/http-request-handler";

export class GameRoute {
  gameController: GameControllerInterface;
  router: Router;

  constructor(gameController: GameControllerInterface, router: Router) {
    this.gameController = gameController;
    this.router = router;
  }

  route(): Router {
    this.router.post("/create-game", (req: Request, res: Response) => {
      const { body, headers } = req;
      const httpRequest = new HttpRequestHandler({ body, headers }).request();
      this.gameController.create(httpRequest).then((data) => {
        res.status(data.statusCode).json(data.body);
      });
    });

    this.router.delete("/delete-game/:id", (req: Request, res: Response) => {
      const { params, headers } = req;
      const httpRequest = new HttpRequestHandler({ params, headers }).request();
      this.gameController.delete(httpRequest).then((data) => {
        res.status(data.statusCode).json(data.body);
      });
    });

    this.router.get("/get-game/:id", (req: Request, res: Response) => {
      const { params, headers } = req;
      const httpRequest = new HttpRequestHandler({ params, headers }).request();
      this.gameController.getOne(httpRequest).then((data) => {
        res.status(data.statusCode).json(data.body);
      });
    });

    this.router.get("/get-all-games", (req: Request, res: Response) => {
      const { headers } = req;
      const httpRequest = new HttpRequestHandler({ headers }).request();
      this.gameController.getAll(httpRequest).then((data) => {
        res.status(data.statusCode).json(data.body);
      });
    });

    this.router.put("/update-game/:id", (req: Request, res: Response) => {
      const { params, body, headers } = req;
      const httpRequest = new HttpRequestHandler({
        params,
        body,
        headers,
      }).request();
      this.gameController.update(httpRequest).then((data) => {
        res.status(data.statusCode).json(data.body);
      });
    });

    return this.router;
  }
}
