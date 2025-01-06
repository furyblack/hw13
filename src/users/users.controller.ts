import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(protected userService: UsersService) {}
  @Get()
  getUsers(@Query('term') term: string) {
    return this.userService.findUsers(term);
  }

  @Get(':id')
  getUser(@Param('id') userId) {
    return [{ id: 1 }, { id: 2 }].find((u) => u.id === +userId);
  }

  @Post()
  createUser(@Body() inputModel: CreateUserInputModelType) {
    return {
      id: 12,
      name: inputModel.name,
      child: inputModel.child,
    };
  }
  @Delete(':id')
  deleteUser(@Param('id') userId: string) {
    return userId;
  }
}

type CreateUserInputModelType = {
  name: string;
  child: number;
};
