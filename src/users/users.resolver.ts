import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

import { User } from './user.model';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { WrongWord } from 'src/wrongword/wrongword.model';
import { Score } from 'src/scores/score.model';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private userService: UserService,
    private prismaService: PrismaService,
  ) {}

  @Query(() => User, { nullable: true })
  async user(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<User | null> {
    return this.userService.getUserById(id);
  }

  @ResolveField('scores', () => [Score])
  async getScores(@Parent() user: User) {
    const { id } = user;
    return this.prismaService.score.findMany({
      where: { userId: id },
    });
  }

  @ResolveField('wrongWords', () => [WrongWord])
  async getWrongWords(@Parent() user: User) {
    const { id } = user;
    return this.prismaService.wrongWord.findMany({
      where: { userId: id },
    });
  }
}
