import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ShopModule } from './shop/shop.module'
import { UserModule } from './user/user.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.setGlobalPrefix('api/v1')
    app.useGlobalPipes(new ValidationPipe())
    app.enableCors()

    const shopDocumentOptions = new DocumentBuilder()
        .setTitle('Shop')
        .setDescription('The Shop API description')
        .setVersion('1.0')
        .build()

    const shopDocument = SwaggerModule.createDocument(
        app,
        shopDocumentOptions,
        {
            include: [ShopModule],
        },
    )
    SwaggerModule.setup('api/v1/docs/shop', app, shopDocument)

    const userDocumentOptions = new DocumentBuilder()
        .setTitle('User')
        .setDescription('The User API description')
        .setVersion('1.0')
        .build()

    const userDocument = SwaggerModule.createDocument(
        app,
        userDocumentOptions,
        {
            include: [UserModule],
        },
    )
    SwaggerModule.setup('api/v1/docs/user', app, userDocument)

    await app.listen(3000)
}
bootstrap()
