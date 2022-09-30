//@ts-nocheck
import { list, nonNull, nullable, queryField } from "nexus";
import { Chat } from "..";
import { ChatTypeEnum } from "../inputs/index";

export const chats = queryField("posts", {
  type: nullable(list(nonNull(Chat))),
  // @ts-ignore
  resolve: async (_paremt, _args, ctx) => {
    return await ctx.prisma.posts.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    });
  },
});

export const allChats = queryField("allPostsAsc", {
  type: nullable(list(nonNull(Chat))),
  resolve: async (_parent, _args, ctx) => {
    return await ctx.prisma.posts.findMany({
      orderBy: {
        createdAt: "asc",
      },

      take: 50,
    });
  },
});

export const chatFilters = queryField("postFilters", {
  type: nullable(list(nonNull(Chat))),
  args: {
    chatType: nonNull(ChatTypeEnum),
  },
  resolve: async (_parent, args, ctx) => {
    return await ctx.prisma.posts.findMany({
      where: {
        type: args.chatType,
      },
    });
  },
});
