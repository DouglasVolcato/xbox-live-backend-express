import { LoginAuthUseCaseInterface } from '../../../data/abstract/auth/login-auth-interface';
import { AuthControllerInterface } from '../../../presentation/abstract/controllers/auth-controller-interface';
import { HttpRequest, HttpResponse } from '../game/interface-imports';
export declare class AuthController implements AuthControllerInterface {
    private readonly loginAuthUseCase;
    constructor(loginAuthUseCase: LoginAuthUseCaseInterface);
    login(httpRequest: HttpRequest): Promise<HttpResponse>;
}
