import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';

@Injectable()
export class OpenAIService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateReadingMaterial(
    level: number,
    charactersCount: number,
    topic: string,
  ): Promise<string> {
    const prompts = [
      `Write a fairy tale suitable for kindergarteners within ${charactersCount} characters. Topic: ${topic}.`,
      `Write a story about a historical event or an Aesop's fable suitable for elementary students within ${charactersCount} characters. Topic: ${topic}.`,
      `Write an article on current affairs suitable for middle school students within ${charactersCount} characters. Topic: ${topic}.`,
      `Write a draft essay suitable for high school students within ${charactersCount} characters. Topic: ${topic}.`,
      `Write a detailed analysis suitable for college students within ${charactersCount} characters. Topic: ${topic}.`,
      `Write an in-depth report suitable for experts within ${charactersCount} characters. Topic: ${topic}.`,
    ];

    try {
      const chatCompletion = await this.openai.chat.completions.create({
        messages: [
          { role: 'user', content: `${prompts[level]} Topic: ${topic}.` },
        ],
        model: 'gpt-4',
      });

      const content = chatCompletion.choices[0].message.content;

      return content;
    } catch (error) {
      console.error('Error generating reading material:', error);
      throw new Error('Failed to generate reading material');
    }
  }
}
