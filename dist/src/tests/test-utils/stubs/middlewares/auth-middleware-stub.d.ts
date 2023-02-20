import { UserEntityInterface } from '../../../../domain/entities/user-entity-interface';
import { AuthMiddlewareInterface } from '../../../../presentation/abstract/middlewares/auth-middleware-interface';
export declare class AuthMiddlewareStub implements AuthMiddlewareInterface {
    auth(): Promise<UserEntityInterface>;
}
