import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dtos/create-user.dto'
import { FindOptionsDto } from '../shared/dtos/find-option.dto'
import { FindOneParamsDto } from '../shared/dtos/find-by-id-params.dto'
import { ObjectId } from 'mongodb'

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
        const { _id, ...user } = body
        return await this.userService.create({
            _id: new ObjectId(_id),
            ...user,
        })
    }
}
