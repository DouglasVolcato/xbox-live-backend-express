"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddGamesProfileUseCase = void 0;
const errors_1 = require("../../../utils/errors");
class AddGamesProfileUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(profileId, gameIds, userId) {
        const foundProfile = await this.repository.getOne(profileId);
        const foundGames = await (await this.repository.getAllGames()).map((game) => game.id);
        if (foundProfile && foundProfile.userId === userId) {
            const newFavoriteGames = gameIds.filter((gameId) => {
                if (!foundProfile.favoriteGames.includes(gameId) &&
                    foundGames.includes(gameId)) {
                    return gameId;
                }
            });
            const updatedFavoriteGames = [
                ...foundProfile.favoriteGames,
                ...newFavoriteGames,
            ].sort();
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
exports.AddGamesProfileUseCase = AddGamesProfileUseCase;
//# sourceMappingURL=addGames-profile-usecase.js.map