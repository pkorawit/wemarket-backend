import { IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    uid: string

    @ApiPropertyOptional()
    @IsOptional()
    firstname: string

    @ApiPropertyOptional()
    @IsOptional()
    lastname: string

    @ApiPropertyOptional()
    @IsOptional()
    telephone: string

    @ApiPropertyOptional()
    @IsOptional()
    gender: string

    @ApiPropertyOptional()
    @IsOptional()
    photoURL: string

    @ApiPropertyOptional()
    @IsOptional()
    email: string
}
