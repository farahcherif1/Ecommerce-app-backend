import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from 'config';
import { TransformationInterceptor } from './responseInterceptor';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const config = require("config");

  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.useGlobalInterceptors(new TransformationInterceptor());
  await app.listen(config.get('port'), ()=> {
    return console.log(`Server is running on port ${config.get('port')}`);
  });
}
bootstrap();
