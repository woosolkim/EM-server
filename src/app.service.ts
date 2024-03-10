import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<{ message: string; date: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          message: 'Hello World!',
          date: new Date().toISOString(),
        });
      }, 1500);
    });
  }
}
