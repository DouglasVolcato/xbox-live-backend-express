import { Router } from "express";
import { UserControllerInterface } from "../../../presentation/abstract/controllers/user-controller-interface";
export declare class UserRoute {
    profileController: UserControllerInterface;
    router: Router;
    constructor(profileController: UserControllerInterface, router: Router);
    route(): Router;
}
