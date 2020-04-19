import { IsOptional } from 'class-validator';

export interface FindOptions {
  skip: number;
  take: number;
}
