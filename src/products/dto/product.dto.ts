import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

/**
 * Product Dto swagger config.
 */
export class ProductDto {
  /**
   * Id of the product.
   */
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Id of the product', required: true })
  public _id: string;

  /**
   * Name of the product.
   */
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Name of the product', required: true })
  public name: string;

  /**
   * Category of the product.
   */
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Category of the product', required: true })
  public category: string;

  /**
   * SKU of the product.
   */
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Sku of the product', required: true })
  public sku: string;

  /**
   * The price.
   */
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'The price', required: true })
  public price: number;

  /**
   * The quantity.
   */
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'The quantity', required: true })
  public quantity: number;

  /**
   * Creation date.
   */
  @IsNumber()
  @ApiProperty({ description: 'Creation date'})
  public created_at?: number;

  /**
   * Updated date.
   */
  @IsNumber()
  @ApiProperty({ description: 'Updated date'})
  public modified_at?: number;
}
