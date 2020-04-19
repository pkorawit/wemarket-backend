import { Schema } from 'mongoose';

export const ShopSchema = new Schema({
    id: String,
    logoURL: String,
    name: String,
    category: String,
    description: String,
    photoURL: [String],
    serviceType: [String],
    paymentType: [String],
    products: [Object],
    telephone: String,
    contact: String,
    address: Object,
    owners: [Object],
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
}, { collection: 'Shop' })
