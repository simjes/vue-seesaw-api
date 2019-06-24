import { subscriptionField } from 'nexus';
import { idArg } from 'nexus/dist/core';
import { Context } from './types';

export const PollResultSubscription = subscriptionField('pollResult', {
  type: 'AnswerSubscriptionPayload',
  args: {
    pollId: idArg(),
  },
  subscribe(_: any, { pollId }: { pollId: string }, context: Context) {
    // Subscribe to changes on answers in the given poll
    return context.prisma.$subscribe.answer({
      node: { poll: { id: pollId } },
    });
  },
  resolve(payload: any) {
    return payload;
  },
});
