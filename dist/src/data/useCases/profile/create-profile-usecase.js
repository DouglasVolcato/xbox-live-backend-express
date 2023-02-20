"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfileUseCase = void 0;
const profile_entity_1 = require("../../../entities/profile-entity");
class CreateProfileUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(body) {
        const profileBody = new profile_entity_1.ProfileEntity(body);
        profileBody.validateBody();
        const createdProfile = await this.repository.create(profileBody.getBody());
        if (createdProfile) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.CreateProfileUseCase = CreateProfileUseCase;
//# sourceMappingURL=create-profile-usecase.js.map