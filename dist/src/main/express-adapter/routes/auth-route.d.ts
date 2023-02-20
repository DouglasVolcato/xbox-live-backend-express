import { Router } from "express";
import { AuthControllerInterface } from "../../../presentation/abstract/controllers/auth-controller-interface";
export declare class AuthRoute {
    authController: AuthControllerInterface;
    router: Router;
    constructor(authController: AuthControllerInterface, router: Router);
    route(): Router;
}
