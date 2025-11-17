import { ConflictException, Injectable } from '@nestjs/common';
import { AuthService } from '@packages/auth';
import { PrismaService } from '@packages/db';
import { LoginArgs, RegisterArgs } from './public.dto';

@Injectable()
export class UserPublicService {
  constructor(
    private readonly db: PrismaService,
    private readonly authService: AuthService,
  ) {}

  async register(args: RegisterArgs) {
    const { email, password, firstName, lastName, confirmPassword } = args;
    // console.log(typeof email, typeof password, typeof firstName, typeof lastName, typeof confirmPassword);
    console.log('Register Args:', args.email);
    const findUser = await this.db.user.findUnique({ where: { email } });
    if (findUser) {
      throw new ConflictException('User already exists');
    }

    if (password !== confirmPassword) {
      throw new ConflictException('Passwords do not match');
    }
    const hashedPassword = await this.authService.hashPassword(password);
    const newuser = await this.db.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        profileImage: '',
      },
    });

    return newuser;
  }

  async login(args: LoginArgs) {
    const { email, password } = args;
    // console.log('login Args:', args);
    const findUser = await this.db.user.findUnique({ where: { email } });
    if (!findUser) {
      throw new ConflictException('Invalid email or password');
    }

    const isPasswordValid = await this.authService.verifyPassword(
      password,
      findUser.password,
    );
    if (!isPasswordValid) {
      throw new ConflictException('Invalid email or password');
    }

    return this.authService.generateToken(findUser.id);
  }
}
