import { UserEntityInterface } from 'src/domain/entities/user-entity-interface';
import { UserRepositoryInterface } from 'src/infra/repositories/abstract/user-repository-interface';
export declare class UserRepository implements UserRepositoryInterface {
    create(body: UserEntityInterface): Promise<UserEntityInterface>;
    getOneByEmail(email: string): Promise<UserEntityInterface>;
    getOneById(id: string): Promise<UserEntityInterface>;
    getAll(): Promise<UserEntityInterface[]>;
    update(body: UserEntityInterface, id: string): Promise<UserEntityInterface>;
    delete(id: string): Promise<void | UserEntityInterface>;
}
