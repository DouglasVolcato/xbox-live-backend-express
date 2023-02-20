import { UserEntityInterface } from '../../../../domain/entities/user-entity-interface';
import { TokenHandlerInterface } from '../../../../utils/abstract/adapters/token-handler-interface';
export declare class TokenHandlerAdapterStub implements TokenHandlerInterface {
    generateToken(): string;
    validateToken(): Promise<UserEntityInterface>;
}
