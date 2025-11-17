import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { UserPublicService } from './public.service';
import { LoginArgs, RegisterArgs } from './public.dto';

@Controller('/public')
export class PublicController {
  constructor(private readonly service: UserPublicService) {}

  @Post('/register')
  async register(@Body() args: RegisterArgs) {
    await this.service.register(args);
    return { statusCode: HttpStatus.CREATED };
  }

  @Post('/login')
  async login(@Body() args: LoginArgs) {
    const token = await this.service.login(args);
    return { statusCode: HttpStatus.OK, access_token: token };
  }
}
