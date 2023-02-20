"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGameUseCase = void 0;
const game_entity_1 = require("../../../entities/game-entity");
const errors_1 = require("../../../utils/errors");
class UpdateGameUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(body, id) {
        const foundGame = await this.repository.getOne(id);
        if (foundGame) {
            const updatedBody = new game_entity_1.GameEntity(body).updateBody(foundGame);
            const updatedGame = await this.repository.update(updatedBody, id);
            if (updatedGame) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            throw new errors_1.InvalidParamError('ID');
        }
    }
}
exports.UpdateGameUseCase = UpdateGameUseCase;
//# sourceMappingURL=update-game-usecase.js.map