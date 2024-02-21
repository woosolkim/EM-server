import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UserService) {}

  @Query(() => User, { nullable: true })
  async user(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<User | null> {
    return this.userService.getUserById(id);
  }
}
