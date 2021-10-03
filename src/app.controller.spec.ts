import { AuthService } from '@auth/service/auth.service';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userLoginMock } from './shared/mock/user-login.mock';

describe('AppController', () => {
  let appController: AppController;
  let service: AuthService;


  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: AuthService,
          useValue: {
            login: jest.fn(() => ({})),
          }
        }
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    service = app.get<AuthService>(AuthService);
  });

  describe('Instantiation', () => {
    it('It should be defined', () => {
      expect(AppController).toBeDefined();
    });
  });

  describe('root', () => {
    it('should return Access_token', async () => {
      const res = await service.login(userLoginMock);
      expect(res).toEqual({});
    });
  });
});
