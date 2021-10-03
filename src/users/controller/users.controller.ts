import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
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
}
