import { UserEntityInterface } from 'src/domain/entities/user-entity-interface';
import { UserRepositoryInterface } from 'src/infra/repositories/abstract/user-repository-interface';
import { GetOneUserByIdUseCaseInterface } from 'src/data/abstract/user/getOne-user-byId-interface';
export declare class GetOneUserByIdUseCase implements GetOneUserByIdUseCaseInterface {
    private readonly repository;
    constructor(repository: UserRepositoryInterface);
    execute(id: string): Promise<UserEntityInterface | void>;
}
