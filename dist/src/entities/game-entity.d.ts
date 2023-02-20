import { GameDto } from '../domain/dtos/game-dto';
import { GameEntityInterface } from '../domain/entities/game-entity-interface';
import { GameValidatorInterface } from '../entities/abstract/game-validator-interface';
export declare class GameEntity implements GameValidatorInterface {
    private readonly game;
    constructor(game: GameDto);
    validateBody(): void;
    getBody(): GameEntityInterface;
    updateBody(mainGame: GameEntityInterface): GameEntityInterface;
}
