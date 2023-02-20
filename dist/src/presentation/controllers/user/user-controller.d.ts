import { CreateUserUseCaseInterface, DeleteUserUseCaseInterface, GetOneUserByEmailUseCaseInterface, GetOneUserByIdUseCaseInterface, UpdateUserUseCaseInterface, UserControllerInterface, HttpRequest, HttpResponse, GetAllUsersUseCaseInterface, AuthMiddlewareInterface } from './interface-imports';
export declare class UserController implements UserControllerInterface {
    private readonly authMiddleware;
    private readonly createUserUseCase;
    private readonly getOneUserByEmailUseCase;
    private readonly getOneUserByIdUseCase;
    private readonly getAllUsersUseCase;
    private readonly updateUserUseCase;
    private readonly deleteUserUseCase;
    constructor(authMiddleware: AuthMiddlewareInterface, createUserUseCase: CreateUserUseCaseInterface, getOneUserByEmailUseCase: GetOneUserByEmailUseCaseInterface, getOneUserByIdUseCase: GetOneUserByIdUseCaseInterface, getAllUsersUseCase: GetAllUsersUseCaseInterface, updateUserUseCase: UpdateUserUseCaseInterface, deleteUserUseCase: DeleteUserUseCaseInterface);
    create(httpRequest: HttpRequest): Promise<HttpResponse>;
    getOneByEmail(httpRequest: HttpRequest): Promise<HttpResponse>;
    getOneById(httpRequest: HttpRequest): Promise<HttpResponse>;
    getAll(httpRequest: HttpRequest): Promise<HttpResponse>;
    update(httpRequest: HttpRequest): Promise<HttpResponse>;
    delete(httpRequest: HttpRequest): Promise<HttpResponse>;
}
