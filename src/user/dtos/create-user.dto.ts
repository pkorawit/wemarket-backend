import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    firstname: string

    @IsNotEmpty()
    lastname: string

    @IsNotEmpty()
    telephone: string

    @IsNotEmpty()
    gender: string

    @IsNotEmpty()
    photoURL: string

    @IsNotEmpty()
    email: string
}
