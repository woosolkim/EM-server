import { Test, TestingModule } from '@nestjs/testing';
import { ReadsController } from './reads.controller';

describe('ReadsController', () => {
  let controller: ReadsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadsController],
    }).compile();

    controller = module.get<ReadsController>(ReadsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
