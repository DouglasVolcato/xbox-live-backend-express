import { Request, Response, Router } from "express";
import { ProfileControllerInterface } from "../../../presentation/abstract/controllers/profile-controller-interface";
import { HttpRequestHandler } from "../../../utils/handlers/http/http-request-handler";

export class ProfileRoute {
  profileController: ProfileControllerInterface;
  router: Router;

  constructor(profileController: ProfileControllerInterface, router: Router) {
    this.profileController = profileController;
    this.router = router;
  }

  route(): Router {
    this.router.post("/create-profile", (req: Request, res: Response) => {
      const { body, headers } = req;
      const httpRequest = new HttpRequestHandler({ body, headers }).request();
      this.profileController.create(httpRequest).then((data) => {
        res.status(data.statusCode).json(data.body);
      });
    });

    this.router.get("/get-all-profiles", (req: Request, res: Response) => {
      const { headers } = req;
      const httpRequest = new HttpRequestHandler({ headers }).request();
      this.profileController.getAll(httpRequest).then((data) => {
        res.status(data.statusCode).json(data.body);
      });
    });

    this.router.get("/get-profile/:id", (req: Request, res: Response) => {
      const { params, headers } = req;
      const httpRequest = new HttpRequestHandler({ params, headers }).request();
      this.profileController.getOne(httpRequest).then((data) => {
        res.status(data.statusCode).json(data.body);
      });
    });

    this.router.delete("/delete-profile/:id", (req: Request, res: Response) => {
      const { params, headers } = req;
      const httpRequest = new HttpRequestHandler({ params, headers }).request();
      this.profileController.delete(httpRequest).then((data) => {
        res.status(data.statusCode).json(data.body);
      });
    });

    this.router.patch("/update-profile/:id", (req: Request, res: Response) => {
      const { params, body, headers } = req;
      const httpRequest = new HttpRequestHandler({
        params,
        body,
        headers,
      }).request();
      this.profileController.update(httpRequest).then((data) => {
        res.status(data.statusCode).json(data.body);
      });
    });

    this.router.patch(
      "/add-games-profile/:id",
      (req: Request, res: Response) => {
        const { params, body, headers } = req;
        const httpRequest = new HttpRequestHandler({
          params,
          body,
          headers,
        }).request();
        this.profileController.addGames(httpRequest).then((data) => {
          res.status(data.statusCode).json(data.body);
        });
      }
    );

    this.router.patch(
      "/remove-games-profile/:id",
      (req: Request, res: Response) => {
        const { params, body, headers } = req;
        const httpRequest = new HttpRequestHandler({
          params,
          body,
          headers,
        }).request();
        this.profileController.removeGames(httpRequest).then((data) => {
          res.status(data.statusCode).json(data.body);
        });
      }
    );

    return this.router;
  }
}
