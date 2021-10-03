import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ProductController } from './products/controller/product.controller';
import { ProductService } from './products/service/product.service';
import { ProductModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
    useFactory: () => ({
      uri: 'mongodb://127.0.0.1:27017/totalEnergy',
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
  }),
    UserModule,
    ProductModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
