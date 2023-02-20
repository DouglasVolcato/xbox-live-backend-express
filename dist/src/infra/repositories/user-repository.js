"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const prisma_database_1 = require("../database/prisma-database");
class UserRepository {
    async create(body) {
        delete body.profiles;
        return await prisma_database_1.prismaDatabase.user.create({
            data: {
                id: body.id,
                name: body.name,
                email: body.email,
                password: body.password,
                cpf: body.cpf,
                isAdmin: body.isAdmin,
                createdAt: body.createdAt,
                updatedAt: body.updatedAt,
            },
            include: { profiles: { include: { Game: true } } },
        });
    }
    async getOneByEmail(email) {
        return await prisma_database_1.prismaDatabase.user.findUnique({
            where: { email: email },
            include: { profiles: { include: { Game: true } } },
        });
    }
    async getOneById(id) {
        return await prisma_database_1.prismaDatabase.user.findUnique({
            where: { id: id },
            include: { profiles: { include: { Game: true } } },
        });
    }
    async getAll() {
        return await prisma_database_1.prismaDatabase.user.findMany({
            include: { profiles: { include: { Game: true } } },
        });
    }
    async update(body, id) {
        return await prisma_database_1.prismaDatabase.user.update({
            where: { id: id },
            data: {
                id: body.id,
                name: body.name,
                email: body.email,
                password: body.password,
                cpf: body.cpf,
                isAdmin: body.isAdmin,
                createdAt: body.createdAt,
                updatedAt: body.updatedAt,
            },
            include: { profiles: { include: { Game: true } } },
        });
    }
    async delete(id) {
        const user = await this.getOneById(id);
        async function deleteProfile() {
            return await user.profiles.map(async (profile) => {
                const profileId = profile.id;
                await prisma_database_1.prismaDatabase.profile.delete({
                    where: { id: profileId },
                });
            });
        }
        return await new Promise((resolve) => {
            resolve(deleteProfile());
        }).then(async () => {
            return await prisma_database_1.prismaDatabase.user.delete({
                where: { id: id },
                include: { profiles: { include: { Game: true } } },
            });
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user-repository.js.map