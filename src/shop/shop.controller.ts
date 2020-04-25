import { Controller, Get, Param, Post, Body, Query, Put } from '@nestjs/common'
import { ShopService } from './shop.service'
import { FindOneParamsDto } from '../shared/dtos/find-by-id-params.dto'
import { CreateShopDto } from './dtos/create-shop.dto'
import { FindOptionsDto } from '../shared/dtos/find-option.dto'
import { ObjectId } from 'mongodb'
import { UpdateShopDto } from './dtos/update-shop.dto'

@Controller('shop')
export class ShopController {
    constructor(private readonly shopService: ShopService) {}

    @Get()
    async find(@Query() query: FindOptionsDto) {
        return await this.shopService.find(query)
    }

    @Get('owned')
    async getOwnedShop(@Query() query: FindOneParamsDto) {
        return await this.shopService.getOwnedShop(query.id)
    }

    @Get('user/:id')
    async findByUserId(@Param() params: FindOneParamsDto) {
        return await this.shopService.findByUserId(params.id)
    }

    @Post()
    async create(@Body() body: CreateShopDto) {
        return await this.shopService.create(body)
    }

    @Put(':id')
    async updateShop(@Body() body: UpdateShopDto, @Param() params: FindOneParamsDto) {
        return await this.shopService.update({
            _id: new ObjectId(params.id),
            ...body,
        })
    }

    @Get(':id')
    async findOne(@Param() params: FindOneParamsDto) {
        return await this.shopService.findOne(params.id)
    }
}
