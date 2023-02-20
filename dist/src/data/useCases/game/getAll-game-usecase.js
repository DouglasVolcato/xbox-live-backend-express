"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllGamesUseCase = void 0;
class GetAllGamesUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        return await this.repository.getAll();
    }
}
exports.GetAllGamesUseCase = GetAllGamesUseCase;
//# sourceMappingURL=getAll-game-usecase.js.map