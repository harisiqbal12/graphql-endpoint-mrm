"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const nexus_1 = require("nexus");
const __1 = require("../");
const inputs_1 = require("../inputs");
exports.createUser = (0, nexus_1.mutationField)("createUser", {
    type: (0, nexus_1.nullable)(__1.User),
    args: {
        input: (0, nexus_1.nonNull)(inputs_1.CreateUserInput),
    },
    resolve: async (_parent, args, ctx) => {
        return ctx.prisma.users.create({
            data: {
                fullname: args.input?.fullname,
                image: args.input.image,
                age: args.input.age,
                role: args.input.role,
                createdAt: new Date(Date.now()),
                email: args.input.email,
            },
        });
    },
});
