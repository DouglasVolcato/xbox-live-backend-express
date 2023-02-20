"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRepository = void 0;
const prisma_database_1 = require("../database/prisma-database");
class GameRepository {
    async create(body) {
        return await prisma_database_1.prismaDatabase.game.create({ data: body });
    }
    async getOne(id) {
        return await prisma_database_1.prismaDatabase.game.findUnique({
            where: {
                id: id,
            },
        });
    }
    async getAll() {
        return await prisma_database_1.prismaDatabase.game.findMany();
    }
    async update(body, id) {
        return await prisma_database_1.prismaDatabase.game.update({
            where: { id: id },
            data: body,
        });
    }
    async delete(id) {
        await prisma_database_1.prismaDatabase.profile.findMany().then(async (profiles) => profiles.filter(async (profile) => {
            if (profile.favoriteGames.find((item) => item === id)) {
                const updatedFavoriteGames = profile.favoriteGames.filter((gameId) => gameId !== id);
                await prisma_database_1.prismaDatabase.profile.update({
                    where: {
                        id: profile.id,
                    },
                    data: {
                        favoriteGames: updatedFavoriteGames,
                    },
                });
            }
        }));
        return await prisma_database_1.prismaDatabase.game.delete({
            where: { id: id },
        });
    }
}
exports.GameRepository = GameRepository;
//# sourceMappingURL=game-repository.js.map