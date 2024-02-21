import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/user.model';

@ObjectType()
export class WrongWord {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  word: string;

  @Field(() => Int)
  userId: number;

  @Field(() => Boolean)
  solved: boolean;

  @Field(() => String)
  createdAt: Date;

  @Field(() => String)
  updatedAt: Date;

  @Field(() => User, { nullable: true })
  user?: User;
}
