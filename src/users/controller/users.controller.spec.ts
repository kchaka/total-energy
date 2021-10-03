import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '@users/service/users.service';
import { UserController } from './users.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
            provide: UsersService,
            useValue: {
              findOne: jest.fn(() => ({})),
            }
        }
      ]
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
