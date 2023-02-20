"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserUseCase = void 0;
class DeleteUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        const deletedUser = await this.repository.delete(id);
        if (deletedUser) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.DeleteUserUseCase = DeleteUserUseCase;
//# sourceMappingURL=delete-user-usecase.js.map