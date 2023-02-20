"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRepository = void 0;
const prisma_database_1 = require("../database/prisma-database");
class ProfileRepository {
    async create(body) {
        delete body.favoriteGames;
        return await prisma_database_1.prismaDatabase.profile.create({
            data: body,
            include: { Game: true },
        });
    }
    async getOne(id) {
        return await prisma_database_1.prismaDatabase.profile.findUnique({
            where: {
                id: id,
            },
            include: { Game: true },
        });
    }
    async getAll() {
        return await prisma_database_1.prismaDatabase.profile.findMany({ include: { Game: true } });
    }
    async update(body, id) {
        return await prisma_database_1.prismaDatabase.profile.update({
            where: { id: id },
            data: {
                id: body.id,
                title: body.title,
                imageUrl: body.imageUrl,
                userId: body.userId,
                createdAt: body.createdAt,
                updatedAt: body.updatedAt,
            },
            include: { Game: true },
        });
    }
    async delete(id) {
        return await prisma_database_1.prismaDatabase.profile.delete({
            where: { id: id },
            include: { Game: true },
        });
    }
    async updateFavoriteGames(id, favoriteGames) {
        const newGameList = favoriteGames.map((game) => {
            return { id: game };
        });
        return await prisma_database_1.prismaDatabase.profile.update({
            where: { id: id },
            data: {
                favoriteGames: favoriteGames,
                Game: { set: newGameList },
            },
            include: { Game: true },
        });
    }
    async getAllGames() {
        return await prisma_database_1.prismaDatabase.game.findMany();
    }
}
exports.ProfileRepository = ProfileRepository;
//# sourceMappingURL=profile-repository.js.map