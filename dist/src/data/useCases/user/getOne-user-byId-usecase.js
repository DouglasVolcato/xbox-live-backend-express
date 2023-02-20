"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOneUserByIdUseCase = void 0;
class GetOneUserByIdUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        return await this.repository.getOneById(id);
    }
}
exports.GetOneUserByIdUseCase = GetOneUserByIdUseCase;
//# sourceMappingURL=getOne-user-byId-usecase.js.map