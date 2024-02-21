import { Test, TestingModule } from '@nestjs/testing';
import { WrongwordController } from './wrongword.controller';

describe('WrongwordController', () => {
  let controller: WrongwordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WrongwordController],
    }).compile();

    controller = module.get<WrongwordController>(WrongwordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
