import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Score } from 'src/scores/score.model';
import { WrongWord } from 'src/wrongword/wrongword.model';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => [Score], { nullable: true })
  scores?: Score[];

  @Field(() => [WrongWord], { nullable: true })
  wrongWords?: WrongWord[];
}
