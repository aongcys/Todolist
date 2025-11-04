import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { UserPublicService } from './public.service';
import { RegisterArgs } from './public.dto';

@Controller('/public')
export class PublicController {
  constructor(private readonly service: UserPublicService) { }

  @Post('/register')
  async register(@Body() args: RegisterArgs) {
    console.log('Register Args:', args);
    await this.service.register(args);
    return { statusCode: HttpStatus.CREATED };
  }
}
