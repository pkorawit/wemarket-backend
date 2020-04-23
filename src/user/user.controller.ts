import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dtos/create-user.dto'
import { FindOptionsDto } from '../shared/dtos/find-option.dto'
import { FindOneParamsDto } from '../shared/dtos/find-by-id-params.dto'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async find(@Query() query: FindOptionsDto) {
        return await this.userService.find(query)
    }

    @Get(':id')
    async findOne(@Param() params: FindOneParamsDto) {
        return await this.userService.findOne(params.id)
    }

    @Post()
    async create(@Body() body: CreateUserDto) {
        return await this.userService.create(body)
    }
}
