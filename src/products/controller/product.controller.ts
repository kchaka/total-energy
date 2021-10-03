import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductPayloadDto } from '../dto/create-product.dto';
import { ProductDto } from '../dto/product.dto';
import { ProductService } from '../service/product.service';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  /**
    * Get All Products.
    *
    * @returns - Product list
    */
  @ApiResponse({ type: ProductDto, isArray: true, description: 'Get All Products', status: 200 })
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  /**
    * Get All categories.
    *
    * @returns - Category list
    */
  @ApiResponse({ type: String, isArray: true, description: 'Get All Products', status: 200 })
  @Get('/categories')
  findAllCat() {
    return this.productService.findAllCat();
  }

  /**
    * Get Product By Id.
    *
    * @param ProductId - The product Id
    * @returns - Product Info
    */
  @ApiResponse({ type: ProductDto, description: 'Get Product By Id', status: 200 })
  @Get('/:id')
  findOne(@Param('id') ProductId: string) {
    return this.productService.findOne(ProductId);
  }

  /**
   * Create new product
   *
   * @param createProductPayload - Product Payload
   * @returns - Product Info
   */
  @ApiResponse({ type: ProductDto, description: 'Product info', status: 200 })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @Post()
  create(@Body() productPayload: ProductPayloadDto) {
    return this.productService.create(productPayload);
  }

  /**
   * Updates Product.
   *
   * @param productId - Id of the Product
   * @param productPayload - Product Payload
   * @returns - Product Info
   */
  @ApiResponse({ type: ProductDto, description: 'Update Product', status: 200 })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  @ApiNotFoundResponse({ description: 'PRODUCT_NOT_FOUND' })
  @ApiBadRequestResponse({ description: 'USER_IS_NOT_ALLOWED' })
  @Put('/:id')
  update(@Param('id') productId: string, @Body() productPayload: ProductPayloadDto) {
    return this.productService.update(productId, productPayload);
  }

  /**
   * Delete Product.
   *
   * @param productId - The Product Id
   * @returns - Deleted Product
   */
  @ApiResponse({ type: ProductDto, description: 'Delete the product', status: 200 })
  @ApiInternalServerErrorResponse({ description: 'internal server error' })
  @ApiNotFoundResponse({ description: 'PRODUCT_NOT_FOUND' })
  @ApiBadRequestResponse({ description: 'USER_IS_NOT_ALLOWED' })
  @Delete('/:id')
  remove(@Param('id') productId: string) {
    return this.productService.remove(productId);
  }
}
