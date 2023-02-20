"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGameUseCase = void 0;
const game_entity_1 = require("../../../entities/game-entity");
class CreateGameUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(body) {
        const gameBody = new game_entity_1.GameEntity(body);
        gameBody.validateBody();
        const createdGame = await this.repository.create(gameBody.getBody());
        if (createdGame) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.CreateGameUseCase = CreateGameUseCase;
//# sourceMappingURL=create-game-usecase.js.map