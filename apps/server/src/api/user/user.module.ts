import { Module } from '@nestjs/common';
import { PublicController } from './public/pubiic.controller';
import { UserPublicService } from './public/public.service';
import { PrismaService } from '@packages/db';
import { AuthService } from '@packages/auth';

@Module({
  imports: [],
  controllers: [PublicController],
  providers: [UserPublicService, PrismaService, AuthService],
})
export class UserModule { }
