import { IsOptional } from 'class-validator'

export class FindOptionsDto {
    @IsOptional()
    skip: number

    @IsOptional()
    take: number
}
