"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allChats = exports.chats = void 0;
const nexus_1 = require("nexus");
const __1 = require("..");
exports.chats = (0, nexus_1.queryField)("posts", {
    type: (0, nexus_1.nullable)((0, nexus_1.list)((0, nexus_1.nonNull)(__1.Chat))),
    resolve: async (_paremt, _args, ctx) => {
        return await ctx.prisma.posts.findMany({
            orderBy: {
                createdAt: "desc",
            },
            take: 10,
        });
    },
});
exports.allChats = (0, nexus_1.queryField)("allPostsAsc", {
    type: (0, nexus_1.nullable)((0, nexus_1.list)((0, nexus_1.nonNull)(__1.Chat))),
    resolve: async (_parent, _args, ctx) => {
        return await ctx.prisma.posts.findMany({
            orderBy: {
                createdAt: "asc",
            },
            take: 50,
        });
    },
});
