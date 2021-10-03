import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  /**
   * Gets user by Name
   * @param name
   * @returns User info
   */
  public async findOne(name: string): Promise<User> {
    const user = await this.userModel
      .findOne({ name: name })
      .exec();
    console.log(user);
    return user;
  }
}
