import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './interfaces/user.interface'
import { FindOptions } from '../shared/interfaces/find-options.interface'

@Injectable()
export class UserService {
    private readonly logger = new Logger('User Service')

    constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}

    async find(options?: Partial<FindOptions>) {
        this.logger.log('Find Users')
        return await this.UserModel.find()
            .skip(options.skip)
            .limit(options.take)
            .exec()
    }

    async findOne(id: string) {
        this.logger.log(`Find user by id: ${id}`)
        return await this.UserModel.findById({ uid: id }).exec()
    }

    async create(user: Partial<User>) {
        return await new this.UserModel(user).save()
    }

    async update(user: Partial<User>) {
        return await this.UserModel.update({ _id: user._id }, user)
    }
}
