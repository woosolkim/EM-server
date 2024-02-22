import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersController } from './users/users.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersResolver } from './users/users.resolver';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { UserService } from './users/user.service';
import { ReadsResolver } from './reads/reads.resolver';
import { ReadsService } from './reads/reads.service';
import { WrongwordController } from './wrongword/wrongword.controller';
import { WrongwordService } from './wrongword/wrongword.service';
import { WrongwordResolver } from './wrongword/wrongword.resolver';
import { ScoresResolver } from './scores/scores.resolver';
import { ScoresService } from './scores/scores.service';
import { ScoresController } from './scores/scores.controller';
import { OpenAIService } from './openai/openai.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  controllers: [
    AppController,
    UsersController,
    WrongwordController,
    ScoresController,
  ],
  providers: [
    AppService,
    PrismaService,
    UserService,
    UsersResolver,
    ReadsResolver,
    ReadsService,
    WrongwordService,
    WrongwordResolver,
    ScoresResolver,
    ScoresService,
    OpenAIService,
  ],
})
export class AppModule {}
