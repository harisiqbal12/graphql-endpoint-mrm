import { enumType, inputObjectType } from "nexus";

export const CreateChatInput = inputObjectType({
  name: "CreateChatInput",
  definition(t) {
    t.nonNull.string("message");
    t.nonNull.string("senderId");
    t.nonNull.string("greetings");
    t.nonNull.string("regards");
    t.nonNull.field("type", { type: ChatTypeEnum });
  },
});

export const AcknowledgePostInput = inputObjectType({
  name: "AcknowledgePostInput",
  definition(t) {
    t.nonNull.string("user_id");
    t.nonNull.string("post_id");
  },
});

export const ChatTypeEnum = enumType({
  name: "ChatTypeEnum",
  members: {
    HOLIDAY: "HOLIDAY",
    NOTIFICATION: "NOTIFICATION",
  },
});
