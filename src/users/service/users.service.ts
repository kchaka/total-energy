import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '@users/schemas/user.schema';
import { CreateUserDto } from '@usersdto/user-body.dto';
import { UserInterface } from '@usersinterfaces/user.interface.dto';

@Injectable()
export class UsersService {

  private readonly logger = new Logger(UsersService.name);

  /**
   * Creates an instance of User service.
   * @param userModel - The User Model
   */
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
    try {
      this.logger.verbose('Get User By Name');
      const user = await this.userModel.findOne({ name: name });
      return user;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  /**
   * Create New User.
   * 
   * @param createUserDto - The User payload
   * @returns - User info
   */
   public async create(createUserDto: CreateUserDto): Promise<User> {
    this.logger.verbose('Create new User');
    const fieldsAndValues: UserInterface = {
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
    };

    const newUser = new this.userModel(fieldsAndValues);
    return newUser.save();
  }
}
