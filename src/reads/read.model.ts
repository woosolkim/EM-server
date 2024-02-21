import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Read {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  content: string;

  @Field(() => Int)
  level: number;

  @Field(() => String)
  createdAt: Date;

  @Field(() => String)
  from: string;
}
