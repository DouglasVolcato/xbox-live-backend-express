import { LoginAuthUseCaseInterface } from '../../../data/abstract/auth/login-auth-interface';
import { LoginDto } from '../../../domain/dtos/login-dto';
import { UserRepositoryInterface } from '../../../infra/repositories/abstract/user-repository-interface';
import { HasherInterface } from '../../../utils/abstract/adapters/hasher-interface';
import { TokenHandlerInterface } from '../../../utils/abstract/adapters/token-handler-interface';
export declare class LoginAuthUseCase implements LoginAuthUseCaseInterface {
    private readonly repository;
    private readonly hasher;
    private readonly tokenHandler;
    constructor(repository: UserRepositoryInterface, hasher: HasherInterface, tokenHandler: TokenHandlerInterface);
    execute(body: LoginDto): Promise<string | null>;
}
