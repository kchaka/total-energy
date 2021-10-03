import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductPayloadDto } from '../dto/create-product.dto';
import { ProductInterface } from '../interfaces/product.interface.dto';
import { Product } from '../schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}
  
  /**
   * Get all Products
   * @returns - Product List
   */
  public async findAll(): Promise<Product[]> {
    return await this.productModel
      .find()
      .exec();
  }

  /**
   * Gets all Categories
   * @returns - Category List
   */
  public async findAllCat(): Promise<Array<String>> {
    const catList = await this.productModel
      .find({}, {category: 1, _id: 0})
      .exec();
    const categories = [...new Set(catList.map(cat => cat.category))];
    return categories;
  }

  /**
   * Gets product by id
   * @param id - The product Id
   * @returns - Product Info
   */
  public async findOne(id: string): Promise<Product> {
    const product = await this.productModel
      .findById({ _id: id })
      .exec();

    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  /**
   * Create New Product.
   * 
   * @param createProductDto - The product payload
   * @returns - Product info
   */
  public async create(createProductDto: ProductPayloadDto): Promise<Product> {
    const fieldsAndValues: ProductInterface = {
      name: createProductDto.name,
      category: createProductDto.category,
      sku: createProductDto.sku,
      price: createProductDto.price,
      quantity: createProductDto.quantity,
      created_at: Math.floor(Date.now() / 1000)
    };

    const newProduct = new this.productModel(fieldsAndValues);
    return newProduct.save();
  }

  /**
   * Updates Product
   * 
   * @param productId - Product Id
   * @param updateProductDto - Product Payload
   * @returns - Product Info
   */
  public async update(productId: string, updateProductDto: ProductPayloadDto): Promise<Product> {
    const fieldsAndValues: ProductInterface = {
      name: updateProductDto.name,
      category: updateProductDto.category,
      sku: updateProductDto.sku,
      price: updateProductDto.price,
      quantity: updateProductDto.quantity,
      updated_at: Math.floor(Date.now() / 1000)
    };

    const existingProduct = await this.productModel.findByIdAndUpdate(
      { _id: productId },
      fieldsAndValues,
    );

    if (!existingProduct) {
      throw new NotFoundException(`Product #${productId} not found`);
    }

    return existingProduct;
  }

  /**
   * Delete Product.
   *
   * @param productId - The product Id
   * @returns - The deleted Product
   */
  public async remove(productId: string): Promise<Product> {
    /** Check If the product exists */
    await this.findOne(productId);

    const deletedCustomer = await this.productModel.findByIdAndRemove(
      productId,
    );

    return deletedCustomer;
  }
}
