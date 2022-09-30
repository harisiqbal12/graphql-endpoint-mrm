//@ts-nocheck
import { mutationField, nullable, nonNull } from "nexus";
import { Chat } from "..";
import { CreateChatInput, AcknowledgePostInput } from "../inputs";

export const createChat = mutationField("createPost", {
  type: nullable(Chat),
  args: {
    input: nonNull(CreateChatInput),
  },
  //@ts-ignore
  resolve: async (_parent, args, ctx) => {
    return await ctx.prisma.posts.create({
      data: {
        message: args.input.message,
        sender_id: args.input.senderId,
        greetings: args.input.greetings,
        regards: args.input.regards,
        type: args.input.type,
      },
    });
  },
});

export const acknowledgePost = mutationField("acknowledgePost", {
  type: Chat,
  args: {
    input: nonNull(AcknowledgePostInput),
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
