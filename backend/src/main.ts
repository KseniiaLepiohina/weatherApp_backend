import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
      origin: ['http://localhost:3000', 'http://localhost:3001'],
      credentials: true,
    });;

   app.use(express.static(join(__dirname, '../frontend/build')));
    app.use(/^(?!\/weather-data).*$/, (req, res) => {
    res.sendFile(join(__dirname, '../frontend/build', 'index.html'));
  });
  // app.use('*', (req, res) => {
  //    res.sendFile(join(__dirname, '../frontend/build', 'index.html'));
  //  });

  await app.listen(process.env.PORT ?? 5000);

}
bootstrap();
