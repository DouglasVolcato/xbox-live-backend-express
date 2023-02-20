import { DeleteGameUseCaseInterface } from '../../../data/abstract/game/delete-game-interface';
import { GameRepositoryInterface } from '../../../infra/repositories/abstract/game-repository-interface';
export declare class DeleteGameUseCase implements DeleteGameUseCaseInterface {
    private readonly repository;
    constructor(repository: GameRepositoryInterface);
    execute(id: string): Promise<boolean>;
}
