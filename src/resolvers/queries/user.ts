//@ts-nocheck
import { list, nonNull, nullable, queryField, stringArg } from "nexus";
import { User } from "..";

export const users = queryField("users", {
  type: nullable(list(nonNull(User))),
  // @ts-ignore
  resolve: async (_root, _args, ctx) => {
    return ctx.prisma.users.findMany();
  },
});

export const uniqueUser = queryField("uniqueUser", {
  type: nullable(User),
  args: {
    email: nonNull(stringArg()),
  },
  resolve: async (_parent, args, ctx) => {
    return await ctx.prisma.users.findUnique({
      where: {
        email: args.email,
      },
    });
  },
});
