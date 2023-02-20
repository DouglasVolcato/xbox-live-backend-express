import { GetOneUserByIdUseCaseInterface } from '../../../../../data/abstract/user/getOne-user-byId-interface';
import { UserEntityInterface } from '../../../../../domain/entities/user-entity-interface';
export declare class GetOneUserByIdUseCaseStub implements GetOneUserByIdUseCaseInterface {
    execute(): Promise<UserEntityInterface | void>;
}
