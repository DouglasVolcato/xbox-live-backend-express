import { UserEntityInterface } from 'src/domain/entities/user-entity-interface';
import { UserRepositoryInterface } from 'src/infra/repositories/abstract/user-repository-interface';
import { GetOneUserByEmailUseCaseInterface } from 'src/data/abstract/user/getOne-user-byEmail-interface';
export declare class GetOneUserByEmailUseCase implements GetOneUserByEmailUseCaseInterface {
    private readonly repository;
    constructor(repository: UserRepositoryInterface);
    execute(email: string): Promise<UserEntityInterface | void>;
}
