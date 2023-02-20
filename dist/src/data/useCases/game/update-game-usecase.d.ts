import { UpdateGameUseCaseInterface } from '../../../data/abstract/game/update-game-interface';
import { GameRepositoryInterface } from '../../../infra/repositories/abstract/game-repository-interface';
import { GameDto } from '../../../domain/dtos/game-dto';
export declare class UpdateGameUseCase implements UpdateGameUseCaseInterface {
    private readonly repository;
    constructor(repository: GameRepositoryInterface);
    execute(body: GameDto, id: string): Promise<boolean>;
}
