import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import express from "express";
import http from "http";
import { schema } from "./schema";
import { createContext } from "./context";

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const graphqlServer = new ApolloServer({
    schema: schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault(),
    ],
    context: createContext,
  });

  app.get("/", (_req, res) => {
    res.status(200).send('<h2>MRM MANAGEMENT BACKEND"');
  });

  await graphqlServer.start();

  graphqlServer.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  await new Promise<void>((resolve) => {
    httpServer.listen({ port: PORT });
    resolve();
  });

  console.log(
    `Server running at http://localhost:4000${graphqlServer.graphqlPath}"`
  );
}

startApolloServer();
