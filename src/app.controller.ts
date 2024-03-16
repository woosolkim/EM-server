import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): Promise<{ message: string; date: string }> {
    return this.appService.getHello();
  }

  @Get('/hello2')
  getHello2(): Promise<{ message: string; date: string }> {
    return this.appService.getHello2();
  }
}
