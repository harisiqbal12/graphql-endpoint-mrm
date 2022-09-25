import { inputObjectType, enumType } from 'nexus';

export const CreateUserInput = inputObjectType({
	name: 'CreateUserInput',
	definition(t) {
		t.nonNull.string('fullname');
		t.nonNull.int('age');
		t.nonNull.field('role', { type: UserRoleEnum });
		t.nullable.string('image');
	},
});

export const UserRoleEnum = enumType({
	name: 'UserRoleEnum',
	members: {
		HR: 'HR',
		OWNER: 'OWNER',
		EMPLOYEE: 'EMPLOYEE',
	},
});
