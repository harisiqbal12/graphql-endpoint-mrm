"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acknowledgePost = exports.createChat = void 0;
const nexus_1 = require("nexus");
const __1 = require("..");
const inputs_1 = require("../inputs");
exports.createChat = (0, nexus_1.mutationField)("createPost", {
    type: (0, nexus_1.nullable)(__1.Chat),
    args: {
        input: (0, nexus_1.nonNull)(inputs_1.CreateChatInput),
    },
    resolve: async (_parent, args, ctx) => {
        return await ctx.prisma.posts.create({
            data: {
                message: args.input.message,
                sender_id: args.input.senderId,
                greetings: args.input.greetings,
                regards: args.input.regards,
            },
        });
    },
});
exports.acknowledgePost = (0, nexus_1.mutationField)("acknowledgePost", {
    type: __1.Chat,
    args: {
        input: (0, nexus_1.nonNull)(inputs_1.AcknowledgePostInput),
    },
    resolve: async (_parent, args, ctx) => {
        return await ctx.prisma.posts.update({
            where: {
                id: args.input.post_id,
            },
            data: {
                Acknowledgements: {
                    connect: {
                        id: args.input.user_id,
                    },
                },
            },
        });
    },
});
