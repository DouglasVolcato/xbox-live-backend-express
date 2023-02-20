import { Request, Response, Router } from "express";
import { AuthControllerInterface } from "../../../presentation/abstract/controllers/auth-controller-interface";
import { HttpRequestHandler } from "../../../utils/handlers/http/http-request-handler";

export class AuthRoute {
  authController: AuthControllerInterface;
  router: Router;

  constructor(authController: AuthControllerInterface, router: Router) {
    this.authController = authController;
    this.router = router;
  }

  route(): Router {
    this.router.post("/login", (req: Request, res: Response) => {
      const { body } = req;
      const httpRequest = new HttpRequestHandler({ body }).request();
      this.authController.login(httpRequest).then((data) => {
        res.status(data.statusCode).json(data.body);
      });
    });

    return this.router;
  }
}
