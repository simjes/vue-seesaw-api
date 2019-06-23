import { prismaObjectType } from 'nexus-prisma';

const Query = prismaObjectType({
  name: 'Query',
  definition: t => t.prismaFields(['poll']),
});

export default Query;
