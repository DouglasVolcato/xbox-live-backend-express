import { TokenHandlerInterface } from '../abstract/adapters/token-handler-interface';
import { UserEntityInterface } from 'src/domain/entities/user-entity-interface';
import { GetOneUserByIdUseCaseInterface } from 'src/data/abstract/user/getOne-user-byId-interface';
export declare class TokenHandlerAdapter implements TokenHandlerInterface {
    private readonly getOneUserByIdUseCase;
    constructor(getOneUserByIdUseCase: GetOneUserByIdUseCaseInterface);
    generateToken(userId: string): string;
    validateToken(token: string): Promise<UserEntityInterface>;
}
