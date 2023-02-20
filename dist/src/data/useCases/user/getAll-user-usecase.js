"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersUseCase = void 0;
class GetAllUsersUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        return await this.repository.getAll();
    }
}
exports.GetAllUsersUseCase = GetAllUsersUseCase;
//# sourceMappingURL=getAll-user-usecase.js.map