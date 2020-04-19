import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common'
import { ShopService } from './shop.service'
import { FindOneParamsDto } from '../shared/dtos/find-one-params.dto'
import { CreateShopDto } from './dtos/create-shop.dto'
import { FindOptionsDto } from '../shared/dtos/find-option.dto'

@Controller('shop')
export class ShopController {
    constructor(private readonly shopService: ShopService) {}

    @Get()
    async find(@Query() query: FindOptionsDto) {
        return await this.shopService.find(query)
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
