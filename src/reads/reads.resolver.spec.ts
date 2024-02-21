import { Test, TestingModule } from '@nestjs/testing';
import { ReadsResolver } from './reads.resolver';

describe('ReadsResolver', () => {
  let resolver: ReadsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadsResolver],
    }).compile();

    resolver = module.get<ReadsResolver>(ReadsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
