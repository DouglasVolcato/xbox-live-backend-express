import { GameEntityInterface } from '../../../../domain/entities/game-entity-interface';
import { GameRepositoryInterface } from '../../../../infra/repositories/abstract/game-repository-interface';
export declare class GameRepositoryStub implements GameRepositoryInterface {
    create(): Promise<GameEntityInterface>;
    getOne(): Promise<void | GameEntityInterface>;
    getAll(): Promise<GameEntityInterface[] | []>;
    update(): Promise<void | GameEntityInterface>;
    delete(): Promise<void | GameEntityInterface>;
}
