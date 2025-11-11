import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000', 'http://192.168.1.106:3000', '*'],
  });
  const port = process.env.PORT ?? 4001;
  console.log(`🚀 Nest server listening on port ${port}`);
  await app.listen(port, '0.0.0.0');
}
bootstrap();
