import { ApolloServer } from 'apollo-server';
import { makePrismaSchema } from 'nexus-prisma';
import * as path from 'path';
// tslint:disable-next-line: no-submodule-imports
import 'regenerator-runtime/runtime';
import datamodelInfo from './generated/nexus-prisma';
import { prisma } from './generated/prisma-client';
import Mutation from './Mutation';
import Query from './Query';
import { Context } from './types';

const schema = makePrismaSchema({
  types: [Query, Mutation],

  prisma: {
    datamodelInfo,
    client: prisma,
  },

  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },
});

const isDevelopment = process.env.NODE_ENV === 'development';
const server = new ApolloServer({
  schema,
  context: (initialContext): Context => {
    return {
      request: initialContext.req,
      response: initialContext.res,
      prisma,
    };
  },
  playground: isDevelopment,
  debug: isDevelopment,
  introspection: isDevelopment,
  cors: {
    origin: process.env.CLIENT_ORIGIN,
  },
});

server
  .listen({
    port: process.env.PORT || 4000,
  })
  // tslint:disable-next-line: no-console
  .then(({ url }) => console.log(url));
