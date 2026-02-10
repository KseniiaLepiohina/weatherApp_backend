import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Weather forecast')
    .setDescription('The weather forecast API description')
    .setVersion('1.0')
    .addTag('weather') 
    .build();

   const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: 'https://weather-app-one-steel-71.vercel.app',
    credentials: true,
  });

  const port = process.env.PORT || 5000;
  await app.listen(port, '0.0.0.0');
  
  console.log(`Application is running on: http://localhost:${port}/api`);
}
bootstrap();
