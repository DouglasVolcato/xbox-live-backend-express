import { UserRepositoryInterface } from 'src/infra/repositories/abstract/user-repository-interface';
import { DeleteUserUseCaseInterface } from 'src/data/abstract/user/delete-user-interface';
export declare class DeleteUserUseCase implements DeleteUserUseCaseInterface {
    private readonly repository;
    constructor(repository: UserRepositoryInterface);
    execute(id: string): Promise<boolean>;
}
