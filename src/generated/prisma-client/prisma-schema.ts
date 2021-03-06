// Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateAnswer {
  count: Int!
}

type AggregatePoll {
  count: Int!
}

type Answer {
  id: ID!
  answer: String!
  votes: Int!
  poll: Poll!
}

type AnswerConnection {
  pageInfo: PageInfo!
  edges: [AnswerEdge]!
  aggregate: AggregateAnswer!
}

input AnswerCreateInput {
  id: ID
  answer: String!
  votes: Int
  poll: PollCreateOneWithoutAnswersInput!
}

input AnswerCreateManyWithoutPollInput {
  create: [AnswerCreateWithoutPollInput!]
  connect: [AnswerWhereUniqueInput!]
}

input AnswerCreateWithoutPollInput {
  id: ID
  answer: String!
  votes: Int
}

type AnswerEdge {
  node: Answer!
  cursor: String!
}

enum AnswerOrderByInput {
  id_ASC
  id_DESC
  answer_ASC
  answer_DESC
  votes_ASC
  votes_DESC
}

type AnswerPreviousValues {
  id: ID!
  answer: String!
  votes: Int!
}

input AnswerScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  answer: String
  answer_not: String
  answer_in: [String!]
  answer_not_in: [String!]
  answer_lt: String
  answer_lte: String
  answer_gt: String
  answer_gte: String
  answer_contains: String
  answer_not_contains: String
  answer_starts_with: String
  answer_not_starts_with: String
  answer_ends_with: String
  answer_not_ends_with: String
  votes: Int
  votes_not: Int
  votes_in: [Int!]
  votes_not_in: [Int!]
  votes_lt: Int
  votes_lte: Int
  votes_gt: Int
  votes_gte: Int
  AND: [AnswerScalarWhereInput!]
  OR: [AnswerScalarWhereInput!]
  NOT: [AnswerScalarWhereInput!]
}

type AnswerSubscriptionPayload {
  mutation: MutationType!
  node: Answer
  updatedFields: [String!]
  previousValues: AnswerPreviousValues
}

input AnswerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AnswerWhereInput
  AND: [AnswerSubscriptionWhereInput!]
  OR: [AnswerSubscriptionWhereInput!]
  NOT: [AnswerSubscriptionWhereInput!]
}

input AnswerUpdateInput {
  answer: String
  votes: Int
  poll: PollUpdateOneRequiredWithoutAnswersInput
}

input AnswerUpdateManyDataInput {
  answer: String
  votes: Int
}

input AnswerUpdateManyMutationInput {
  answer: String
  votes: Int
}

input AnswerUpdateManyWithoutPollInput {
  create: [AnswerCreateWithoutPollInput!]
  delete: [AnswerWhereUniqueInput!]
  connect: [AnswerWhereUniqueInput!]
  set: [AnswerWhereUniqueInput!]
  disconnect: [AnswerWhereUniqueInput!]
  update: [AnswerUpdateWithWhereUniqueWithoutPollInput!]
  upsert: [AnswerUpsertWithWhereUniqueWithoutPollInput!]
  deleteMany: [AnswerScalarWhereInput!]
  updateMany: [AnswerUpdateManyWithWhereNestedInput!]
}

input AnswerUpdateManyWithWhereNestedInput {
  where: AnswerScalarWhereInput!
  data: AnswerUpdateManyDataInput!
}

input AnswerUpdateWithoutPollDataInput {
  answer: String
  votes: Int
}

input AnswerUpdateWithWhereUniqueWithoutPollInput {
  where: AnswerWhereUniqueInput!
  data: AnswerUpdateWithoutPollDataInput!
}

input AnswerUpsertWithWhereUniqueWithoutPollInput {
  where: AnswerWhereUniqueInput!
  update: AnswerUpdateWithoutPollDataInput!
  create: AnswerCreateWithoutPollInput!
}

input AnswerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  answer: String
  answer_not: String
  answer_in: [String!]
  answer_not_in: [String!]
  answer_lt: String
  answer_lte: String
  answer_gt: String
  answer_gte: String
  answer_contains: String
  answer_not_contains: String
  answer_starts_with: String
  answer_not_starts_with: String
  answer_ends_with: String
  answer_not_ends_with: String
  votes: Int
  votes_not: Int
  votes_in: [Int!]
  votes_not_in: [Int!]
  votes_lt: Int
  votes_lte: Int
  votes_gt: Int
  votes_gte: Int
  poll: PollWhereInput
  AND: [AnswerWhereInput!]
  OR: [AnswerWhereInput!]
  NOT: [AnswerWhereInput!]
}

input AnswerWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createAnswer(data: AnswerCreateInput!): Answer!
  updateAnswer(data: AnswerUpdateInput!, where: AnswerWhereUniqueInput!): Answer
  updateManyAnswers(data: AnswerUpdateManyMutationInput!, where: AnswerWhereInput): BatchPayload!
  upsertAnswer(where: AnswerWhereUniqueInput!, create: AnswerCreateInput!, update: AnswerUpdateInput!): Answer!
  deleteAnswer(where: AnswerWhereUniqueInput!): Answer
  deleteManyAnswers(where: AnswerWhereInput): BatchPayload!
  createPoll(data: PollCreateInput!): Poll!
  updatePoll(data: PollUpdateInput!, where: PollWhereUniqueInput!): Poll
  updateManyPolls(data: PollUpdateManyMutationInput!, where: PollWhereInput): BatchPayload!
  upsertPoll(where: PollWhereUniqueInput!, create: PollCreateInput!, update: PollUpdateInput!): Poll!
  deletePoll(where: PollWhereUniqueInput!): Poll
  deleteManyPolls(where: PollWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Poll {
  id: ID!
  question: String!
  answers(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Answer!]
}

type PollConnection {
  pageInfo: PageInfo!
  edges: [PollEdge]!
  aggregate: AggregatePoll!
}

input PollCreateInput {
  id: ID
  question: String!
  answers: AnswerCreateManyWithoutPollInput
}

input PollCreateOneWithoutAnswersInput {
  create: PollCreateWithoutAnswersInput
  connect: PollWhereUniqueInput
}

input PollCreateWithoutAnswersInput {
  id: ID
  question: String!
}

type PollEdge {
  node: Poll!
  cursor: String!
}

enum PollOrderByInput {
  id_ASC
  id_DESC
  question_ASC
  question_DESC
}

type PollPreviousValues {
  id: ID!
  question: String!
}

type PollSubscriptionPayload {
  mutation: MutationType!
  node: Poll
  updatedFields: [String!]
  previousValues: PollPreviousValues
}

input PollSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PollWhereInput
  AND: [PollSubscriptionWhereInput!]
  OR: [PollSubscriptionWhereInput!]
  NOT: [PollSubscriptionWhereInput!]
}

input PollUpdateInput {
  question: String
  answers: AnswerUpdateManyWithoutPollInput
}

input PollUpdateManyMutationInput {
  question: String
}

input PollUpdateOneRequiredWithoutAnswersInput {
  create: PollCreateWithoutAnswersInput
  update: PollUpdateWithoutAnswersDataInput
  upsert: PollUpsertWithoutAnswersInput
  connect: PollWhereUniqueInput
}

input PollUpdateWithoutAnswersDataInput {
  question: String
}

input PollUpsertWithoutAnswersInput {
  update: PollUpdateWithoutAnswersDataInput!
  create: PollCreateWithoutAnswersInput!
}

input PollWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  question: String
  question_not: String
  question_in: [String!]
  question_not_in: [String!]
  question_lt: String
  question_lte: String
  question_gt: String
  question_gte: String
  question_contains: String
  question_not_contains: String
  question_starts_with: String
  question_not_starts_with: String
  question_ends_with: String
  question_not_ends_with: String
  answers_every: AnswerWhereInput
  answers_some: AnswerWhereInput
  answers_none: AnswerWhereInput
  AND: [PollWhereInput!]
  OR: [PollWhereInput!]
  NOT: [PollWhereInput!]
}

input PollWhereUniqueInput {
  id: ID
}

type Query {
  answer(where: AnswerWhereUniqueInput!): Answer
  answers(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Answer]!
  answersConnection(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnswerConnection!
  poll(where: PollWhereUniqueInput!): Poll
  polls(where: PollWhereInput, orderBy: PollOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Poll]!
  pollsConnection(where: PollWhereInput, orderBy: PollOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PollConnection!
  node(id: ID!): Node
}

type Subscription {
  answer(where: AnswerSubscriptionWhereInput): AnswerSubscriptionPayload
  poll(where: PollSubscriptionWhereInput): PollSubscriptionPayload
}
`