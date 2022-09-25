"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const nexus_1 = require("nexus");
const __1 = require("..");
exports.users = (0, nexus_1.queryField)('users', {
    type: (0, nexus_1.nullable)((0, nexus_1.list)((0, nexus_1.nonNull)(__1.User))),
    resolve: async (_root, _args, ctx) => {
        return ctx.prisma.users.findMany();
    },
});
