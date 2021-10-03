import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/service/auth.service';
import { UsersService } from './users/service/user/users.service';

describe('AppController', () => {
  let appController: AppController;
  jest.mock('./auth/service/auth.service');

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('Instantiation', () => {
    it('It should be defined', () => {
      expect(AppController).toBeDefined();
    });
  });

  describe('root', () => {
    it('should return Access_token', () => {
      expect(appController.login({name: 'kawt', password: '1234', email: 'kawt@foo.bar'}))
      .toBe({
        'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia2Frb2EiLCJwYXNzd29yZCI6Imtha29hQGZvby5jb20iLCJlbWFpbCI6IibDqSgiLCJpYXQiOjE2MzMyNTQwMDYsImV4cCI6MTYzMzI1NDA2Nn0.o-ld4IB4zrjnBON3xTIeOeFk2XYy0DIcuWpobMfneZA'
      });
    });
  });
});
