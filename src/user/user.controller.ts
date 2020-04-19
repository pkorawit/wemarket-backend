import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { FindOneParamsDto } from 'src/shared/dtos/find-one-params.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Get()
    async find() {
        return await this.userService.find()
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
