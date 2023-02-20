"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOneGameUseCase = void 0;
class GetOneGameUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        return await this.repository.getOne(id);
    }
}
exports.GetOneGameUseCase = GetOneGameUseCase;
//# sourceMappingURL=getOne-game-usecase.js.map