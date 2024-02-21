import { Test, TestingModule } from '@nestjs/testing';
import { WrongwordResolver } from './wrongword.resolver';

describe('WrongwordResolver', () => {
  let resolver: WrongwordResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WrongwordResolver],
    }).compile();

    resolver = module.get<WrongwordResolver>(WrongwordResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
