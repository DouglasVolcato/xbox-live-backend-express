import { TokenHandlerInterface } from '../../utils/abstract/adapters/token-handler-interface';
import { UserEntityInterface } from '../../domain/entities/user-entity-interface';
import { AuthMiddlewareInterface } from '../abstract/middlewares/auth-middleware-interface';
import { HttpRequest } from '../controllers/profile/interface-imports';
export declare class AuthMiddleware implements AuthMiddlewareInterface {
    private readonly tokenHandler;
    constructor(tokenHandler: TokenHandlerInterface);
    auth(httpRequest: HttpRequest): Promise<UserEntityInterface>;
}
