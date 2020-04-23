import { Schema } from 'mongoose'
import { ObjectId } from 'mongodb'

export const ShopSchema = new Schema(
    {
        _id: ObjectId,
        name: String,
        category: String,
        description: String,
        photoURL: [String],
        serviceType: String,
        paymentType: String,
        products: [Object],
        telephone: String,
        contact: String,
        address: Object,
        owners: String,
        location: {
            type: {
                type: String,
                enum: ['Point'],
                required: true,
            },
            coordinates: {
                type: [Number],
                required: true,
            },
        },
    },
    { collection: 'Shop' },
)
