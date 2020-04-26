import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Shop } from './interfaces/shop.interface'
import { Location } from './interfaces/location.interface'
import { FindOptions } from '../shared/interfaces/find-options.interface'
import { GetNearbyShopDTO } from './dtos/get-nearby-shop.dto'

@Injectable()
export class ShopService {
    private readonly logger = new Logger('Shop Service')

    constructor(@InjectModel('Shop') private readonly ShopModel: Model<Shop>) {}

    async find(options?: Partial<FindOptions>) {
        this.logger.log('Find shops')
        return await this.ShopModel.find({ name: { $ne: '' } })
            .skip(options.skip)
            .limit(options.take)
            .exec()
    }

    async findOne(id: string) {
        this.logger.log(`Find shop by id: ${id}`)
        return await this.ShopModel.findById(id).exec()
    }

    async findNearby(location: GetNearbyShopDTO) {
        this.logger.log('Find nearby shops')
        return await this.ShopModel.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [location.lng, location.lat],
                    },
                    $maxDistance: 5000,
                    $minDistance: 50,
                },
            },
        }).exec()
    }

    async findByUserId(userId: string) {
        return await this.ShopModel.find({
            owner: userId,
        }).exec()
    }

    async create(shop: Partial<Shop>) {
        this.logger.log('Create shop')
        return await new this.ShopModel(shop).save()
    }

    async update(_shop: Partial<Shop>) {
        this.logger.log('Update shop')
        return await this.ShopModel.update({ _id: _shop._id }, _shop)
    }

    async getOwnedShop(uid: string) {
        this.logger.log(`Find owned shop by id: ${uid}`)
        return await this.ShopModel.findOne({ owner: uid, name: { $ne: '' } })
    }
}
