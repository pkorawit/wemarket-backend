import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ShopService } from './shop.service';
import { FindOneParamsDto } from 'src/shared/dtos/find-one-params.dto';
import { CreateShopDto } from './dtos/create-shop.dto';

@Controller('shop')
export class ShopController {
    constructor(
        private readonly shopService: ShopService
    ) { }

    @Get()
    async find() {
        return await this.shopService.find()
    }

    @Get(':id')
    async findOne(@Param() params: FindOneParamsDto) {
        return await this.shopService.findOne(params.id)
    }

    @Post()
    async create(@Body() body: CreateShopDto) {
        return await this.shopService.create(body)
    }
}
