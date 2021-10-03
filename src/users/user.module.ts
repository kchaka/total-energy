import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './controller/users.controller';
import { User, UserSchema } from './schemas/user.schema';
import { UsersService } from './service/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
    ])
  ],
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UserModule {}
