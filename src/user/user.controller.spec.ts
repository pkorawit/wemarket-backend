import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './schemas/user.schema';
import { getModelToken } from '@nestjs/mongoose';

describe('User Controller', () => {
  let controller: UserController;
  let service: UserService
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: getModelToken('User'),
          useValue: UserSchema
        },
        UserService
      ]
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Find', () => {
    it('should return array of users', async () => {
      const result = []
      jest.spyOn(service, 'find').mockImplementation(async () => result)
      expect(await controller.find()).toBe(result)
    })
  })

  describe('Find one', () => {
    it('should return user', async () => {
      const result = null
      const param = { id: '1' }
      jest.spyOn(service, 'findOne').mockImplementation(async () => result)
      expect(await controller.findOne(param)).toBe(result)
    })
  })

  describe('Create', () => {
    it('should return new user', async () => {
      const result = null
      jest.spyOn(service, 'create').mockImplementation(async () => result)
      expect(await controller.create(undefined)).toBe(result)
    })
  })
});
