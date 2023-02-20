import { GetOneUserByEmailUseCaseInterface } from '../../../../../data/abstract/user/getOne-user-byEmail-interface';
import { UserEntityInterface } from '../../../../../domain/entities/user-entity-interface';
export declare class GetOneUserByEmailUseCaseStub implements GetOneUserByEmailUseCaseInterface {
    execute(): Promise<UserEntityInterface | void>;
}
