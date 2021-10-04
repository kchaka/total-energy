import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Product } from '@products/schemas/product.schema';
import { Model } from 'mongoose';
import { categories, payload, product } from './mock/product.mock';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let mockProductModel: Model<Product>;

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

  describe('Get all Products', () => {
    it('Get all Products', () => {
      return new Promise<void>(async (done) => {
        const spy = jest.spyOn(mockProductModel, 'find').mockReturnValue([product] as any );
      
        const res = await service.findAll();
        expect(res).toEqual([product]);
        expect(spy).toBeCalled();
        done();
      });
    });
  });

  describe('Get Categories', () => {
    it('Get Categories', () => {
      return new Promise<void>(async (done) => {
        const spy = jest.spyOn(mockProductModel, 'find').mockReturnValue(categories as any );
      
        const res = await service.findAllCat();
        expect(res).toEqual(categories);
        expect(spy).toBeCalled();
        done();
      });
    });
  });

  describe('Get Product', () => {
    it('Get Product', () => {
      return new Promise<void>(async (done) => {
        const spy = jest.spyOn(mockProductModel, 'findOne').mockReturnValue(product as any );
      
        const res = await service.findOne(product._id);
        expect(res).toEqual(product);
        expect(spy).toBeCalled();
        done();
      });
    });

    it('Should return error', () => {
      return new Promise<void>(async (done) => {
        jest
          .spyOn(mockProductModel, 'findOne')
          .mockRejectedValue({ message: `Product #${'1234'} not found` });
        await expect(service.findOne('1234')).rejects.toEqual(
          expect.objectContaining({ message: `Product #${'1234'} not found` })
        );
        expect(mockProductModel.findOne).toHaveBeenCalled();
        done();
      });
    });
  });


  describe('Update Product', () => {
    it('Update Product', () => {
      return new Promise<void>(async (done) => {
        const spy = jest.spyOn(mockProductModel, 'findByIdAndUpdate').mockReturnValue(product as any );
      
        const res = await service.update(product._id, payload);
        expect(res).toEqual(product);
        expect(spy).toBeCalled();
        done();
      });
    });

    it('Should return error', () => {
      return new Promise<void>(async (done) => {
        jest
          .spyOn(mockProductModel, 'findByIdAndUpdate')
          .mockRejectedValue({ message: `Product #${'1234'} not found` });
        await expect(service.update('1234', payload)).rejects.toEqual(
          expect.objectContaining({ message: `Product #${'1234'} not found` })
        );
        expect(mockProductModel.findByIdAndUpdate).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('Remove Product', () => {
    it('Remove Product', () => {
      return new Promise<void>(async (done) => {
        await service.remove(product._id);
        const spy = jest.spyOn(mockProductModel, 'findByIdAndRemove').mockReturnValue(product as any );
    
        const res = await service.remove(product._id);
        expect(res).toEqual(product);
        expect(spy).toBeCalled();
        done();
      });
    });
  });
});
