import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from '@users/schemas/user.schema';
import { UserDto } from '@users/dto/user.dto';
import { Model } from 'mongoose';
import { userMock } from './mock/users.service.mock';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let mockUserModel: Model<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User.name),
          useValue: Model
        }
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    mockUserModel = module.get<Model<User>>(getModelToken(User.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Get User By Name', () => {
    it('Get User By Name', () => {
      return new Promise<void>(async (done) => {
        const user = new UserDto();
        const spy = jest
        .spyOn(mockUserModel, 'findOne')
        .mockResolvedValue(user as User);

        const res = await service.findOne(userMock.name);
        expect(spy).toBeCalled();
        done();
      });
    });
  });

});
