import { UserDto } from '../../../domain/dtos/user-dto';
import { UserRepositoryInterface } from '../../../infra/repositories/abstract/user-repository-interface';
import { UpdateUserUseCaseInterface } from '../../abstract/user/update-user-interface';
export declare class UpdateUserUseCase implements UpdateUserUseCaseInterface {
    private readonly repository;
    constructor(repository: UserRepositoryInterface);
    execute(body: UserDto, id: string): Promise<boolean>;
}
