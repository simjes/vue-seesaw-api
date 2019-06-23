import { Request, Response } from 'express';
import { Prisma } from './generated/prisma-client';

export interface Context {
  prisma: Prisma;
  request: Request;
  response: Response;
}

export interface CreatePollInput {
  question: string;
  answers: string[];
}
