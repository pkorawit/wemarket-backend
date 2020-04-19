import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shop } from './interfaces/shop.interface';
import { Location } from './interfaces/location.interface';

@Injectable()
export class ShopService {
    private readonly logger = new Logger('Shop Service')

    constructor(
        @InjectModel('Shop') private readonly ShopModel: Model<Shop>
    ) { }

    async find() {
        this.logger.log('Find shops')
        return await this.ShopModel.find().exec()
    }

    async findOne(id: string) {
        this.logger.log(`Find shop by id: ${id}`)
        return await this.ShopModel.find().exec()
    }

    async findNearby(location: Location) {
        this.logger.log('Find nearby shops')
        return await this.ShopModel.find({
            location: {
                $geoWithin: {
                    $geometry: location
                }
            }
        })
    }

    async create(shop: Partial<Shop>) {
        return await new this.ShopModel(shop).save()
    }
}
