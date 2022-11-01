import { NestFactory } from '@nestjs/core';
import Validate from './common/validate';
import { AppModule } from './app.module';
import { TransfromInterceptor } from './response.inteceptor';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new Validate());
  app.useGlobalInterceptors(new TransfromInterceptor());
  app.setGlobalPrefix('api');
  app.useStaticAssets('uploads', { prefix: '/uploads' });
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
