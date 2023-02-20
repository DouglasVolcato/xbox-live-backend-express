import { Router } from "express";
import { ProfileControllerInterface } from "../../../presentation/abstract/controllers/profile-controller-interface";
export declare class ProfileRoute {
    profileController: ProfileControllerInterface;
    router: Router;
    constructor(profileController: ProfileControllerInterface, router: Router);
    route(): Router;
}
