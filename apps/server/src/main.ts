import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 4001;
  console.log(`🚀 Nest server listening on port ${port}`);
  await app.listen(port);
}
bootstrap();
