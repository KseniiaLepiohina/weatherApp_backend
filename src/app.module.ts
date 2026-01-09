import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherDataModule } from './weather-data/weather-data.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    WeatherDataModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
