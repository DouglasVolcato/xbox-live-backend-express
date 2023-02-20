import { GameEntityInterface } from '../../../domain/entities/game-entity-interface';
import { GetOneGameUseCaseInterface } from '../../../data/abstract/game/getOne-game-interface';
import { GameRepositoryInterface } from '../../../infra/repositories/abstract/game-repository-interface';
export declare class GetOneGameUseCase implements GetOneGameUseCaseInterface {
    private readonly repository;
    constructor(repository: GameRepositoryInterface);
    execute(id: string): Promise<GameEntityInterface | void>;
}
