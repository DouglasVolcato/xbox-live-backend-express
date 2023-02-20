"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOneUserByEmailUseCase = void 0;
class GetOneUserByEmailUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(email) {
        return await this.repository.getOneByEmail(email);
    }
}
exports.GetOneUserByEmailUseCase = GetOneUserByEmailUseCase;
//# sourceMappingURL=getOne-user-byEmail-usecase.js.map