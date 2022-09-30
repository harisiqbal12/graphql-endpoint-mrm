"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const nexus_1 = require("nexus");
const __1 = require("..");
const index_1 = require("../inputs/index");
exports.Chat = (0, nexus_1.objectType)({
    name: "Chat",
    definition(t) {
        t.string("id");
        t.string("message");
        t.string("sender_id");
        t.string("greetings");
        t.string("regards");
        t.string("createdAt");
        t.field("type", { type: index_1.ChatTypeEnum });
        t.nullable.list.field("Acknowledgements", {
            type: __1.User,
            async resolve(parent, _args, ctx) {
                return await ctx.prisma.users.findMany({
                    where: {
                        Acknowledgements: {
                            some: {
                                id: parent.id,
                            },
                        },
                    },
                });
            },
        });
        t.nullable.field("Sender", {
            type: __1.User,
            async resolve(parent, _args, ctx) {
                const res = await ctx.prisma.posts.findFirst();
                console.log(res);
                return await ctx.prisma.users.findUnique({
                    where: {
                        id: parent.sender_id,
                    },
                });
            },
        });
    },
});
