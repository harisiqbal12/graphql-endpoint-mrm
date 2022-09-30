"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const nexus_1 = require("nexus");
const inputs_1 = require("../inputs");
exports.User = (0, nexus_1.objectType)({
    name: "User",
    definition(t) {
        t.string("id");
        t.string("fullname");
        t.int("age");
        t.nullable.string("image");
        t.field("role", { type: inputs_1.UserRoleEnum });
        t.string("email");
        t.string("createdAt");
    },
});
