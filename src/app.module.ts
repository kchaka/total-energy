import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ProductModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
    useFactory: () => ({
      uri: process.env.DB_MONGO_URI || 'mongodb://127.0.0.1:27017/totalEnergy',
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
