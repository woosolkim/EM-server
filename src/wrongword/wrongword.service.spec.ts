import { Test, TestingModule } from '@nestjs/testing';
import { WrongwordService } from './wrongword.service';

describe('WrongwordService', () => {
  let service: WrongwordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WrongwordService],
    }).compile();

    service = module.get<WrongwordService>(WrongwordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
