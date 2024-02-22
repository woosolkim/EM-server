import { Injectable } from '@nestjs/common';
import { OpenAIService } from 'src/openai/openai.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Read } from './read.model';

@Injectable()
export class ReadsService {
  constructor(
    private openAIService: OpenAIService,
    private prismaService: PrismaService,
  ) {}

  async createReadingMaterial(
    level: number,
    charactersCount: number | null,
    topic: string,
  ): Promise<Read | null> {
    try {
      const readingMaterial = await this.openAIService.generateReadingMaterial(
        level,
        charactersCount ?? 500,
        topic,
      );

      if (!readingMaterial) {
        throw new Error('Failed to generate reading material');
      }

      await this.prismaService.read.create({
        data: {
          level,
          content: readingMaterial,
          from: 'openai',
          topic,
        },
      });

      const newReading = await this.prismaService.read.findFirst({
        where: { content: readingMaterial },
      });

      return newReading;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
