import { PrismaClient } from '@prisma/client';
export declare const prismaDatabase: PrismaClient<{
    log: ("error" | "info" | "query" | "warn")[];
}, never, false>;
