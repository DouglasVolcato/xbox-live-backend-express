import { CreateGameUseCaseInterface, DeleteGameUseCaseInterface, GetAllGamesUseCaseInterface, GetOneGameUseCaseInterface, UpdateGameUseCaseInterface, GameControllerInterface, HttpResponse, HttpRequest } from './interface-imports';
import { AuthMiddlewareInterface } from 'src/presentation/abstract/middlewares/auth-middleware-interface';
export declare class GameController implements GameControllerInterface {
    private readonly authMiddleware;
    private readonly createGameUseCase;
    private readonly getOneGameUseCase;
    private readonly getAllGamesUseCase;
    private readonly updateGameUseCase;
    private readonly deleteGameUseCase;
    constructor(authMiddleware: AuthMiddlewareInterface, createGameUseCase: CreateGameUseCaseInterface, getOneGameUseCase: GetOneGameUseCaseInterface, getAllGamesUseCase: GetAllGamesUseCaseInterface, updateGameUseCase: UpdateGameUseCaseInterface, deleteGameUseCase: DeleteGameUseCaseInterface);
    create(httpRequest: HttpRequest): Promise<HttpResponse>;
    getOne(httpRequest: HttpRequest): Promise<HttpResponse>;
    getAll(httpRequest: HttpRequest): Promise<HttpResponse>;
    update(httpRequest: HttpRequest): Promise<HttpResponse>;
    delete(httpRequest: HttpRequest): Promise<HttpResponse>;
}
