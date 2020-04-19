import { IsNotEmpty } from 'class-validator';

export class FindOneParamsDto {
    @IsNotEmpty()
    id: string
}
