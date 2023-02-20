import { GameEntityInterface } from 'src/domain/entities/game-entity-interface';
import { GameRepositoryInterface } from 'src/infra/repositories/abstract/game-repository-interface';
export declare class GameRepository implements GameRepositoryInterface {
    create(body: GameEntityInterface): Promise<GameEntityInterface>;
    getOne(id: string): Promise<void | GameEntityInterface>;
    getAll(): Promise<GameEntityInterface[] | []>;
    update(body: GameEntityInterface, id: string): Promise<void | GameEntityInterface>;
    delete(id: string): Promise<void | GameEntityInterface>;
}
