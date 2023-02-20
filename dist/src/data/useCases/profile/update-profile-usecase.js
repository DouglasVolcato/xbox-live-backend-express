"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileUseCase = void 0;
const profile_entity_1 = require("../../../entities/profile-entity");
const errors_1 = require("../../../utils/errors");
class UpdateProfileUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(body, profileId, userId) {
        const foundProfile = await this.repository.getOne(profileId);
        if (foundProfile && foundProfile.userId === userId) {
            const updatedBody = new profile_entity_1.ProfileEntity(body).updateBody(foundProfile);
            const updatedProfile = await this.repository.update(updatedBody, profileId);
            if (updatedProfile) {
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
exports.UpdateProfileUseCase = UpdateProfileUseCase;
//# sourceMappingURL=update-profile-usecase.js.map