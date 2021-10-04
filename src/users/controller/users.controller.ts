import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '@usersdto/user-body.dto';
import { UserDto } from '../dto/user.dto';
import { UsersService } from '../service/users.service';

@ApiTags('Users')
@Controller('users')
export class UserController { 
  
  constructor(private usersService: UsersService) {}

  /**
   * Get User by Name.
   *
   * @param userId - User Name
   * @returns -  the user
   */
  @ApiResponse({ type: UserDto, description: 'Get user', status: 200 })
  @Get('/:name')
  findOne(@Param('name') userName: string) {
    return this.usersService.findOne(userName);
  }

  /**
   * Create new User
   *
   * @param userPayload - User Payload
   * @returns - User Info
   */
   @ApiResponse({ type: UserDto, description: 'User info', status: 200 })
   @ApiInternalServerErrorResponse({ description: 'Internal server error' })
   @Post()
   create(@Body() userPayload: CreateUserDto) {
     return this.usersService.create(userPayload);
   }
}
