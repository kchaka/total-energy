import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '@users/dto/user-body.dto';
import { UsersService } from '@users/service/users.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  /**
   * Creates an instance of Auth service.
   * @param usersService - User sevice
   * @param jwtService - JWT Service
   */
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService
  ) {}

  /**
   * Validates User'sname and pass.
   * 
   * @param username - User'name
   * @param pass - User's password
   * @returns 
   */
  async validateUser(username: string, pass: string): Promise<any> {
    try {
      this.logger.verbose('Validate this User');
      const user = await this.usersService.findOne(username);
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  /**
   * @param payload - User payload
   */
  async login(payload: CreateUserDto ) {
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}