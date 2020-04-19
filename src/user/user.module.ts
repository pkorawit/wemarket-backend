import { Module } from '@nestjs/common';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
    ],
    providers: [
        {
            provide: getModelToken('User'),
            useValue: UserSchema
        },
        UserService
    ],
    controllers: [
        UserController
    ]
})
export class UserModule { }
