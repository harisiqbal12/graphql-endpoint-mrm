"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatTypeEnum = exports.AcknowledgePostInput = exports.CreateChatInput = void 0;
const nexus_1 = require("nexus");
exports.CreateChatInput = (0, nexus_1.inputObjectType)({
    name: "CreateChatInput",
    definition(t) {
        t.nonNull.string("message");
        t.nonNull.string("senderId");
        t.nonNull.string("greetings");
        t.nonNull.string("regards");
    },
});
exports.AcknowledgePostInput = (0, nexus_1.inputObjectType)({
    name: "AcknowledgePostInput",
    definition(t) {
        t.nonNull.string("user_id");
        t.nonNull.string("post_id");
    },
});
exports.ChatTypeEnum = (0, nexus_1.enumType)({
    name: "ChatTypeEnum",
    members: {
        HOLIDAY: "HOLIDAY",
        NOTIFICATION: "NOTIFICATION",
    },
});
