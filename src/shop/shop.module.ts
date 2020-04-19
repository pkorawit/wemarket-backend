import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { ShopSchema } from './schemas/shop.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Shop', schema: ShopSchema }])
  ],
  providers: [
    {
      provide: getModelToken('Shop'),
      useValue: ShopSchema
    },
    ShopService
  ],
  controllers: [
    ShopController
  ]
})
export class ShopModule { }
