import { UserDto } from '../../../domain/dtos/user-dto';
import { UserRepositoryInterface } from '../../../infra/repositories/abstract/user-repository-interface';
import { CreateUserUseCaseInterface } from '../../../data/abstract/user/create-user-interface';
export declare class CreateUserUseCase implements CreateUserUseCaseInterface {
    private readonly repository;
    constructor(repository: UserRepositoryInterface);
    execute(body: UserDto): Promise<boolean>;
}
