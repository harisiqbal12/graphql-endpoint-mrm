"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleEnum = exports.CreateUserInput = void 0;
const nexus_1 = require("nexus");
exports.CreateUserInput = (0, nexus_1.inputObjectType)({
    name: 'CreateUserInput',
    definition(t) {
        t.nonNull.string('fullname');
        t.nonNull.int('age');
        t.nonNull.field('role', { type: exports.UserRoleEnum });
        t.nullable.string('image');
    },
});
exports.UserRoleEnum = (0, nexus_1.enumType)({
    name: 'UserRoleEnum',
    members: {
        HR: 'HR',
        OWNER: 'OWNER',
        EMPLOYEE: 'EMPLOYEE',
    },
});
