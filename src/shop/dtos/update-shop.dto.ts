import { User } from 'src/user/interfaces/user.interface'
import { Address } from '../interfaces/address.interface'
import { Product } from '../interfaces/product.interface'
import { IsNotEmpty, IsOptional } from 'class-validator'
import { Location } from '../interfaces/location.interface'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class UpdateShopDto {
    @ApiPropertyOptional()
    @IsOptional()
    logoURL: string

    @ApiPropertyOptional()
    @IsOptional()
    name: string

    @ApiPropertyOptional()
    @IsOptional()
    category: string

    @ApiPropertyOptional()
    @IsOptional()
    description: string

    @ApiPropertyOptional({ type: [String] })
    @IsOptional()
    photoURL: string[]

    @ApiPropertyOptional()
    @IsOptional()
    serviceType: string

    @ApiPropertyOptional()
    @IsOptional()
    paymentType: string

    @ApiPropertyOptional({ type: () => [ProductDto] })
    @IsOptional()
    products: Product[]

    @ApiPropertyOptional({ type: [String] })
    @IsOptional()
    hashtags: string[]

    @ApiPropertyOptional({ type: () => LocationDto })
    @IsOptional()
    location: Location

    @ApiPropertyOptional()
    @IsOptional()
    telephone: string

    @ApiPropertyOptional()
    @IsOptional()
    contact: string

    @ApiPropertyOptional({ type: () => AddressDto })
    @IsOptional()
    address: Address

    @ApiProperty()
    @IsNotEmpty()
    owner: string
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
