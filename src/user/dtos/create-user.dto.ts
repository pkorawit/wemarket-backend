import { IsNotEmpty } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    _id: string

    @ApiPropertyOptional()
    @IsNotEmpty()
    firstname: string

    @ApiPropertyOptional()
    @IsNotEmpty()
    lastname: string

    @ApiPropertyOptional()
    @IsNotEmpty()
    telephone: string

    @ApiPropertyOptional()
    @IsNotEmpty()
    gender: string

    @ApiPropertyOptional()
    @IsNotEmpty()
    photoURL: string

    @ApiPropertyOptional()
    @IsNotEmpty()
    email: string
}
