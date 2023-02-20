"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOneProfileUseCase = void 0;
const errors_1 = require("../../../utils/errors");
class GetOneProfileUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(profileId, userId) {
        const foundProfile = await this.repository.getOne(profileId);
        if (foundProfile && foundProfile.userId === userId) {
            return foundProfile;
        }
        else {
            throw new errors_1.InvalidParamError('ID');
        }
    }
}
exports.GetOneProfileUseCase = GetOneProfileUseCase;
//# sourceMappingURL=getOne-profile-usecase.js.map