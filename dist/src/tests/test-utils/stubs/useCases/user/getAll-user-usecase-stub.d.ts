import { GetAllUsersUseCaseInterface } from '../../../../../data/abstract/user/getAll-user-interface';
import { UserEntityInterface } from '../../../../../domain/entities/user-entity-interface';
export declare class GetAllUsersUseCaseStub implements GetAllUsersUseCaseInterface {
    execute(): Promise<UserEntityInterface[] | []>;
}
