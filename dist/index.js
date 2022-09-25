"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const schema_1 = require("./schema");
const context_1 = require("./context");
async function startApolloServer() {
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    const graphqlServer = new apollo_server_express_1.ApolloServer({
        schema: schema_1.schema,
        plugins: [
            (0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer }),
            (0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)(),
        ],
        context: context_1.createContext,
    });
    await graphqlServer.start();
    graphqlServer.applyMiddleware({ app });
    await new Promise(resolve => {
        httpServer.listen({ port: 4000 });
        resolve();
    });
    console.log(`Server running at http://localhost:4000${graphqlServer.graphqlPath}"`);
}
startApolloServer();
