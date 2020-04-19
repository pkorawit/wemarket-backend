import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from './user/user.module'
import { ShopModule } from './shop/shop.module'

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRootAsync({
            useFactory: () => ({
                uri: process.env.DB_URL,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                dbName: 'wemarket',
                db: 'wemarket',
            }),
        }),
        UserModule,
        ShopModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
