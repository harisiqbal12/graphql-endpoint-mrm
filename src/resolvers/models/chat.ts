//@ts-nocheck
import { objectType } from "nexus";
import { User } from "..";
import { ChatTypeEnum } from "../inputs/index";

export const Chat = objectType({
  name: "Chat",
  definition(t) {
    t.string("id");
    t.string("message");
    t.string("sender_id");
    t.string("greetings");
    t.string("regards");
    t.string("createdAt");
    t.field("type", { type: ChatTypeEnum });

    t.nullable.list.field("Acknowledgements", {
      type: User,

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
      type: User,
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
