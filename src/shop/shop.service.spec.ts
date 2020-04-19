import { Test, TestingModule } from '@nestjs/testing';
import { ShopService } from './shop.service';
import { getModelToken } from '@nestjs/mongoose';
import { ShopSchema } from './schemas/shop.schema';

describe('ShopService', () => {
  let service: ShopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShopService,
        {
          provide: getModelToken('Shop'),
          useValue: ShopSchema
        }
      ],
    }).compile();

    service = module.get<ShopService>(ShopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
