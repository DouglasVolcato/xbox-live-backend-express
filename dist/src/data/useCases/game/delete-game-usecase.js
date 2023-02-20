"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteGameUseCase = void 0;
class DeleteGameUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        const deletedGame = await this.repository.delete(id);
        if (deletedGame) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.DeleteGameUseCase = DeleteGameUseCase;
//# sourceMappingURL=delete-game-usecase.js.map