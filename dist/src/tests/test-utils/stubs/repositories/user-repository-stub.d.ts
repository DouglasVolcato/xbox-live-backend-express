import { UserEntityInterface } from '../../../../domain/entities/user-entity-interface';
import { UserRepositoryInterface } from '../../../../infra/repositories/abstract/user-repository-interface';
export declare class UserRepositoryStub implements UserRepositoryInterface {
    create(): Promise<UserEntityInterface>;
    getOneByEmail(): Promise<void | UserEntityInterface>;
    getOneById(): Promise<void | UserEntityInterface>;
    getAll(): Promise<UserEntityInterface[] | []>;
    update(): Promise<void | UserEntityInterface>;
    delete(): Promise<void | UserEntityInterface>;
}
