"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaDatabase = void 0;
const client_1 = require("@prisma/client");
exports.prismaDatabase = new client_1.PrismaClient({
    log: ['error', 'info', 'query', 'warn'],
});
//# sourceMappingURL=prisma-database.js.map