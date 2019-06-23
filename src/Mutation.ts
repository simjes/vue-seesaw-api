import { idArg, stringArg } from 'nexus';
import { prismaObjectType } from 'nexus-prisma';
import { Context, CreatePollInput } from './types';

const Mutation = prismaObjectType({
  name: 'Mutation',
  definition: t => {
    t.field('createPoll', {
      type: 'Poll',
      args: {
        question: stringArg({ required: true }),
        answers: stringArg({ required: true, list: true }),
      },
      resolve(_, { question, answers }: CreatePollInput, context: Context) {
        return context.prisma.createPoll({
          question,
          answers: {
            create: answers.map((a: string) => ({
              answer: a,
            })),
          },
        });
      },
    });

    t.field('vote', {
      type: 'Answer',
      args: {
        answerId: idArg({ required: true }),
      },
      async resolve(_, { answerId }, context: Context) {
        const answer = await context.prisma.answer({ id: answerId });

        if (!answer) {
          throw Error(`${answerId} is not a valid Id`);
        }

        return context.prisma.updateAnswer({
          where: { id: answerId },
          data: { votes: answer.votes + 1 },
        });
      },
    });
  },
});

export default Mutation;
