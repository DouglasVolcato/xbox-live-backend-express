import { CreateGameUseCaseInterface } from '../../../data/abstract/game/create-game-interface';
import { GameRepositoryInterface } from '../../../infra/repositories/abstract/game-repository-interface';
import { GameDto } from '../../../domain/dtos/game-dto';
export declare class CreateGameUseCase implements CreateGameUseCaseInterface {
    private readonly repository;
    constructor(repository: GameRepositoryInterface);
    execute(body: GameDto): Promise<boolean>;
}
