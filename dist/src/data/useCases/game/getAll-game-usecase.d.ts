import { GetAllGamesUseCaseInterface } from '../../../data/abstract/game/getAll-game-interface';
import { GameRepositoryInterface } from '../../../infra/repositories/abstract/game-repository-interface';
import { GameEntityInterface } from '../../../domain/entities/game-entity-interface';
export declare class GetAllGamesUseCase implements GetAllGamesUseCaseInterface {
    private readonly repository;
    constructor(repository: GameRepositoryInterface);
    execute(): Promise<GameEntityInterface[] | []>;
}
