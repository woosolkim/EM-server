import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/user.model';

@ObjectType()
export class Score {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  score: number;

  @Field(() => Int)
  userId: number;

  @Field(() => String)
  createdAt: Date;

  @Field(() => User, { nullable: true })
  user?: User;
}
