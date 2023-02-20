import { Router } from "express";
import { ApiTestRoute } from "../routes/apiTest-route";

export function makeApiTestFactory(router: Router): ApiTestRoute {
  return new ApiTestRoute(router);
}
