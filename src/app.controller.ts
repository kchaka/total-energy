import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth/service/auth.service';
import { CreateUserDto } from './users/dto/user-body.dto';

@Controller()
export class AppController {

  constructor(
    private authService: AuthService,
  ) {
  }
  /**
   * Login
   *
   * @param createUserDto - User Login Dto
   * @returns Access Token
   */
  @Post('auth/login')
  async login(@Body() createUserDto: CreateUserDto) {
    return this.authService.login(createUserDto);
  }

}
