import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

/**
 * User Dto swagger config.
 */
export class UserDto {
  /**
   * Id of the user.
   */
   @IsNotEmpty()
   @IsString()
   @ApiProperty({ description: 'Id of the user', required: true })
   public id?: string;

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
