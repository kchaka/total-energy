import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Product } from '@products/schemas/product.schema';
import { User } from '@users/schemas/user.schema';
import { Model } from 'mongoose';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService,
        {
          provide: getModelToken(Product.name),
          useValue: Model
        }
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it.only('should be defined', () => {
    expect(service).toBeDefined();
  });
});
