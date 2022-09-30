import { mutationField, nullable, nonNull } from "nexus";
import { User } from "../";
import { CreateUserInput } from "../inputs";

export const createUser = mutationField("createUser", {
  type: nullable(User),
  args: {
    input: nonNull(CreateUserInput),
  },
  //@ts-ignore
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
