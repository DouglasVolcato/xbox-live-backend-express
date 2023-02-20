import { Router } from "express";
import { AuthRoute } from "../routes/auth-route";
export declare function makeAuthFactory(router: Router): AuthRoute;
