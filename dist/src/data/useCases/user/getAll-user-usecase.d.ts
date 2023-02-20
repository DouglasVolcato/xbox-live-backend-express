import { UserEntityInterface } from 'src/domain/entities/user-entity-interface';
import { UserRepositoryInterface } from 'src/infra/repositories/abstract/user-repository-interface';
import { GetAllUsersUseCaseInterface } from 'src/data/abstract/user/getAll-user-interface';
export declare class GetAllUsersUseCase implements GetAllUsersUseCaseInterface {
    private readonly repository;
    constructor(repository: UserRepositoryInterface);
    execute(): Promise<UserEntityInterface[] | []>;
}
