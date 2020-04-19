import { Test, TestingModule } from '@nestjs/testing';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { getModelToken } from '@nestjs/mongoose';
import { ShopSchema } from './schemas/shop.schema';

describe('Shop Controller', () => {
  let controller: ShopController;
  let service: ShopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopController],
      providers: [
        ShopService,
        {
          provide: getModelToken('Shop'),
          useValue: ShopSchema
        }
      ],
    }).compile();

    controller = module.get<ShopController>(ShopController);
    service = module.get<ShopService>(ShopService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
