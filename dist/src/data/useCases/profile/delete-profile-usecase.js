"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProfileUseCase = void 0;
const errors_1 = require("../../../utils/errors");
class DeleteProfileUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(profileId, userId) {
        const foundProfile = await this.repository.getOne(profileId);
        if (foundProfile && foundProfile.userId === userId) {
            const deletedProfile = await this.repository.delete(profileId);
            if (deletedProfile) {
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
exports.DeleteProfileUseCase = DeleteProfileUseCase;
//# sourceMappingURL=delete-profile-usecase.js.map