import { Request, Response, Router } from "express";
import { UserControllerInterface } from "../../../presentation/abstract/controllers/user-controller-interface";
import { HttpRequestHandler } from "../../../utils/handlers/http/http-request-handler";

export class UserRoute {
  profileController: UserControllerInterface;
  router: Router;

  constructor(profileController: UserControllerInterface, router: Router) {
    this.profileController = profileController;
    this.router = router;
  }

  route(): Router {
    this.router.post("/create-user", (req: Request, res: Response) => {
      const { body, headers } = req;
      const httpRequest = new HttpRequestHandler({ body, headers }).request();
      this.profileController.create(httpRequest).then((data) => {
        res.status(data.statusCode).json(data.body);
      });
    });

    this.router.get("/get-all-users", (req: Request, res: Response) => {
      const { headers } = req;
      const httpRequest = new HttpRequestHandler({ headers }).request();
      this.profileController.getAll(httpRequest).then((data) => {
        res.status(data.statusCode).json(data.body);
      });
    });

    this.router.get("/get-user-by-id/:id", (req: Request, res: Response) => {
      const { params, headers } = req;
      const httpRequest = new HttpRequestHandler({ params, headers }).request();
      this.profileController.getOneById(httpRequest).then((data) => {
        res.status(data.statusCode).json(data.body);
      });
    });

    this.router.post("/get-user-by-email", (req: Request, res: Response) => {
      const { body, headers } = req;
      const httpRequest = new HttpRequestHandler({ body, headers }).request();
      this.profileController.getOneByEmail(httpRequest).then((data) => {
        res.status(data.statusCode).json(data.body);
      });
    });

    this.router.delete("/delete-user/:id", (req: Request, res: Response) => {
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

    return this.router;
  }
}
