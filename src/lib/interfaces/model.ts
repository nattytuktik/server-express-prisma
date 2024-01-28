
import { PrismaClient } from "@prisma/client";

export interface PrismaModelConfig {
    prisma: PrismaClient;
    model: "users" | "profiles" | "rooms";
}