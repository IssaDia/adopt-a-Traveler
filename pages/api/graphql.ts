import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import type { NextApiRequest, NextApiResponse } from "next";
import { buildSchema } from "type-graphql";
import { TravelerResolver } from "../../components/src/schema/traveler.resolver";

const schema = await buildSchema({
  resolvers: [TravelerResolver],
});

const server = new ApolloServer({
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}
