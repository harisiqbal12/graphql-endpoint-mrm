"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
const clients_1 = require("./clients");
async function createContext(request) {
    return {
        ...request,
        response: request.res,
        request: request.req,
        prisma: clients_1.prisma,
    };
}
exports.createContext = createContext;
