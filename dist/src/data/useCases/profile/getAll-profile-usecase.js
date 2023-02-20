"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProfilesUseCase = void 0;
class GetAllProfilesUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(userId) {
        const foundProfiles = await this.repository.getAll();
        if (foundProfiles.length !== 0) {
            return foundProfiles.filter((profile) => profile.userId === userId);
        }
        else {
            return [];
        }
    }
}
exports.GetAllProfilesUseCase = GetAllProfilesUseCase;
//# sourceMappingURL=getAll-profile-usecase.js.map