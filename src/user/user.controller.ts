import {
  Body,
  Controller,
  HttpCode,
  Post,
  // UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserRequest, UserResponse } from '../model/user.model';
import { WebResponse } from '../model/web.model';
// import { TimeInterceptor } from 'src/common/time.interceptor';

@Controller('/api/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('')
  @HttpCode(201)
  async register(
    @Body() request: UserRequest,
  ): Promise<WebResponse<UserResponse>> {
    const result = await this.userService.register(request);
    return {
      data: result,
    };
  }

  @Post('/login')
  @HttpCode(200)
  // @UseInterceptors(TimeInterceptor)
  async login(
    @Body() request: UserRequest,
  ): Promise<WebResponse<UserResponse>> {
    const result = await this.userService.login(request);
    return {
      data: result,
    };
  }
}