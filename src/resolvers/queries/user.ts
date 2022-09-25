import { list, nonNull, nullable, queryField } from 'nexus';
import { User } from '..';

export const users = queryField('users', {
	type: nullable(list(nonNull(User))),
	resolve: async (root, args, ctx) => {
		return ctx.prisma.users.findMany();
	},
});
