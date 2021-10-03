import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * User Body Dto swagger config.
 */
export class CreateUserDto {

  /**
   * Name of the user.
   */
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Name of the user', required: true })
  public name: string;

  /**
   * Password of the user.
   */
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Password of the user', required: true })
  public password: string;

  /**
   * Name of the user.
   */
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'Email of the user', required: true })
    public email: string;
}
