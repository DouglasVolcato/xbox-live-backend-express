"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveGamesProfileUseCase = void 0;
const errors_1 = require("../../../utils/errors");
class RemoveGamesProfileUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(profileId, gameIds, userId) {
        const foundProfile = await this.repository.getOne(profileId);
        if (foundProfile && foundProfile.userId === userId) {
            const currentFavoriteGames = foundProfile.favoriteGames;
            const updatedFavoriteGames = currentFavoriteGames
                .filter((item) => !gameIds.find((id) => id === item))
                .sort();
            const updatedProfile = await this.repository.updateFavoriteGames(profileId, updatedFavoriteGames);
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
exports.RemoveGamesProfileUseCase = RemoveGamesProfileUseCase;
//# sourceMappingURL=removeGames-profile-usecase.js.map