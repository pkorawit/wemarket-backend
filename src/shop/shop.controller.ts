import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common'
import { ShopService } from './shop.service'
import { FindOneParamsDto } from '../shared/dtos/find-by-id-params.dto'
import { CreateShopDto } from './dtos/create-shop.dto'
import { FindOptionsDto } from '../shared/dtos/find-option.dto'
import { ObjectId } from 'mongodb'

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

    @Get('user/:id')
    async findByUserId(@Param() params: FindOneParamsDto) {
        return await this.shopService.findByUserId(params.id)
    }

    @Post()
    async create(@Body() body: CreateShopDto) {
        return await this.shopService.create(body)
    }
}
