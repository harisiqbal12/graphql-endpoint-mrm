import { objectType } from "nexus";

import { UserRoleEnum } from "../inputs";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("fullname");
    t.int("age");
    t.nullable.string("image");
    t.field("role", { type: UserRoleEnum });
    t.string("email");
    t.string("createdAt");
  },
});
