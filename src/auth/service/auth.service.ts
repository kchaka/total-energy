import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/user-body.dto';
import { UsersService } from 'src/users/service/user/users.service';

@Injectable()
export class AuthService {
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
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
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