import { Document } from 'mongoose'
import { Address } from 'src/shop/interfaces/address.interface'
import { Location } from 'src/shop/interfaces/location.interface'
import { Product } from './product.interface'
import { User } from 'src/user/interfaces/user.interface'

export interface Shop extends Document {
    id: string
    logoURL: string
    name: string
    category: string
    description: string
    photoURL: string[]
    serviceType: string[]
    paymentType: string[]
    products: Product[]
    hashtags: string[]
    location: Location
    telephone: string
    contact: string
    address: Address
    owners: User[]
}
