import { Router } from "express";
import { makeProfileControllerFactory } from "../../factories/profile-controller-factory";
import { ProfileRoute } from "../routes/profile-route";

export function makeProfileFactory(router: Router): ProfileRoute {
  const profileController = makeProfileControllerFactory();
  return new ProfileRoute(profileController, router);
}
