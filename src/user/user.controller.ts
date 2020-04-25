import { Controller, Get, Post, Body, Param, Query, Put } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dtos/create-user.dto'
import { FindOptionsDto } from '../shared/dtos/find-option.dto'
import { FindOneParamsDto } from '../shared/dtos/find-by-id-params.dto'
import { ObjectId } from 'mongodb'
import { UpdateUserDto } from './dtos/update-user.dto'
import { ShopService } from 'src/shop/shop.service'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async find(@Query() query: FindOptionsDto) {
        return await this.userService.find(query)
    }

    @Get(':id/shop')
    async getOwnedShop(@Param() params: FindOneParamsDto) {
        return await this.userService.getOwnedShop(params.id)
    }

    @Post()
    async create(@Body() body: CreateUserDto) {
        return await this.userService.create(body)
    }

    @Put(':id')
    async update(@Body() body: UpdateUserDto, @Param() params: FindOneParamsDto) {
        return await this.userService.update(body)
    }

    @Get(':id')
    async findOne(@Param() params: FindOneParamsDto) {
        return await this.userService.findOne(params.id)
    }
}
