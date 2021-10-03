import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from '@products/service/product.service';
import { ProductController } from './product.controller';

describe.only('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: ProductService,
          useValue: {
            findAll: jest.fn(() => ({})),
            findAllCat: jest.fn(() => ({})),
            findOne: jest.fn(() => ({})),
            create: jest.fn(() => ({})),
            update: jest.fn(() => ({})),
            remove: jest.fn(() => ({})),
          }
        }
      ]
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
