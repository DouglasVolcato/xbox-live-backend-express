import { CreateProfileUseCaseInterface, DeleteProfileUseCaseInterface, GetAllProfilesUseCaseInterface, GetOneProfileUseCaseInterface, UpdateProfileUseCaseInterface, ProfileControllerInterface, HttpRequest, HttpResponse } from './interface-imports';
import { AuthMiddlewareInterface } from 'src/presentation/abstract/middlewares/auth-middleware-interface';
import { AddGamesProfileUseCaseInterface } from 'src/data/abstract/profile/addGames-profile-interface';
import { RemoveGamesProfileUseCaseInterface } from 'src/data/abstract/profile/removeGames-profile-interface';
export declare class ProfileController implements ProfileControllerInterface {
    private readonly authMiddleware;
    private readonly createProfileUseCase;
    private readonly getOneProfileUseCase;
    private readonly getAllProfilesUseCase;
    private readonly updateProfileUseCase;
    private readonly deleteProfileUseCase;
    private readonly addGamesProfileUseCase;
    private readonly removeGamesProfileUseCase;
    constructor(authMiddleware: AuthMiddlewareInterface, createProfileUseCase: CreateProfileUseCaseInterface, getOneProfileUseCase: GetOneProfileUseCaseInterface, getAllProfilesUseCase: GetAllProfilesUseCaseInterface, updateProfileUseCase: UpdateProfileUseCaseInterface, deleteProfileUseCase: DeleteProfileUseCaseInterface, addGamesProfileUseCase: AddGamesProfileUseCaseInterface, removeGamesProfileUseCase: RemoveGamesProfileUseCaseInterface);
    create(httpRequest: HttpRequest): Promise<HttpResponse>;
    getOne(httpRequest: HttpRequest): Promise<HttpResponse>;
    getAll(httpRequest: HttpRequest): Promise<HttpResponse>;
    update(httpRequest: HttpRequest): Promise<HttpResponse>;
    delete(httpRequest: HttpRequest): Promise<HttpResponse>;
    addGames(httpRequest: HttpRequest): Promise<HttpResponse>;
    removeGames(httpRequest: HttpRequest): Promise<HttpResponse>;
}
