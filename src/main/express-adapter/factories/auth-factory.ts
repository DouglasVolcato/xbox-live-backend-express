import { Router } from "express";
import { makeAuthControllerFactory } from "../../factories/auth-controller-factory";
import { AuthRoute } from "../routes/auth-route";

export function makeAuthFactory(router: Router): AuthRoute {
  const authController = makeAuthControllerFactory();
  return new AuthRoute(authController, router);
}
