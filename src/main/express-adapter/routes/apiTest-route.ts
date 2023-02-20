import { Request, Response, Router } from "express";

export class ApiTestRoute {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  route(): Router {
    this.router.get("/", (req: Request, res: Response) => {
      res.status(200).json({
        message: "Api is running.",
        docs: "xbox-live-backend-production.up.railway.app/api",
      });
    });

    return this.router;
  }
}
