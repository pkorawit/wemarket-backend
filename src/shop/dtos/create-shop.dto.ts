import { User } from 'src/user/interfaces/user.interface'
import { Address } from '../interfaces/address.interface'
import { Product } from '../interfaces/product.interface'
import { IsNotEmpty } from 'class-validator'
import { Location } from '../interfaces/location.interface'
import { ApiProperty } from '@nestjs/swagger'

export class CreateShopDto {
    @ApiProperty()
    @IsNotEmpty()
    logoURL: string

    @ApiProperty()
    @IsNotEmpty()
    name: string

    @ApiProperty()
    @IsNotEmpty()
    category: string

    @ApiProperty()
    @IsNotEmpty()
    description: string

    @ApiProperty({ type: [String] })
    @IsNotEmpty()
    photoURL: string[]

    @ApiProperty({ type: [String] })
    @IsNotEmpty()
    serviceType: string[]

    @ApiProperty({ type: [String] })
    @IsNotEmpty()
    paymentType: string[]

    @ApiProperty({ type: () => [ProductDto] })
    @IsNotEmpty()
    products: Product[]

    @ApiProperty({ type: [String] })
    @IsNotEmpty()
    hashtags: string[]

    @ApiProperty({ type: () => LocationDto })
    @IsNotEmpty()
    location: Location

    @ApiProperty()
    @IsNotEmpty()
    telephone: string

    @ApiProperty()
    @IsNotEmpty()
    contact: string

    @ApiProperty({ type: () => AddressDto })
    @ApiProperty()
    @IsNotEmpty()
    address: Address

    @ApiProperty({ type: () => [UserDto] })
    @ApiProperty()
    @IsNotEmpty()
    owners: User[]
}

export class ProductDto {
    @ApiProperty()
    name: string

    @ApiProperty()
    price: number

    @ApiProperty()
    photoURL: string
}

export class LocationDto {
    @ApiProperty()
    type: string

    @ApiProperty({ type: [Number] })
    coordinates: number[]
}

export class AddressDto {
    @ApiProperty()
    detail: string

    @ApiProperty()
    subDistrict: string

    @ApiProperty()
    district: string

    @ApiProperty()
    province: string

    @ApiProperty()
    postalCode: string
}

export class UserDto {
    @ApiProperty()
    id?: string

    @ApiProperty()
    firstname: string

    @ApiProperty()
    lastname: string

    @ApiProperty()
    telephone: string

    @ApiProperty()
    gender: string

    @ApiProperty()
    photoURL: string

    @ApiProperty()
    email: string
}
