import { Router } from "express";
import { makeUserControllerFactory } from "../../factories/user-controller-factory";
import { UserRoute } from "../routes/user-route";

export function makeUserFactory(router: Router): UserRoute {
  const userController = makeUserControllerFactory();
  return new UserRoute(userController, router);
}
