import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class GetNearbyShopDTO {
    @ApiProperty()
    @IsNotEmpty()
    lat: number

    @ApiProperty()
    @IsNotEmpty()
    lng: number
}
