import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReadsService } from './reads.service';
import { Read } from './read.model';

@Resolver()
export class ReadsResolver {
  constructor(private readService: ReadsService) {}

  @Query(() => [Read])
  async getTodaysReadingByLevel(
    @Args('level', { type: () => Int }) level: number,
  ): Promise<Read[]> {
    return this.readService.getTodaysReadingByLevel(level);
  }

  @Mutation(() => Read, { nullable: true })
  async createReadingMaterial(
    @Args('level', { type: () => Int }) level: number,
    @Args('charactersCount', { type: () => Int, nullable: true })
    charactersCount: number,
    @Args('topic')
    topic: string,
  ): Promise<Read | null> {
    return this.readService.createReadingMaterial(
      level,
      charactersCount,
      topic,
    );
  }
}
