import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { WeatherDataService } from './weather-data.service';

@Controller('weather-data')
export class WeatherDataController {
  constructor(private readonly weatherDataService: WeatherDataService) { }

  @Get('getWeatherDataByLocation')
  async getWeatherDataByLocation(
    @Query('lat') lat: string,
    @Query('lng') lng: string) {
    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);

    if (isNaN(latNum) || isNaN(lngNum)) {
      return { error: 'Invalid coordinates' };
    }

    return this.weatherDataService.getWeatherDataByLocation(latNum, lngNum);
  }
  @Get('getWeatherForecastByLocation')
  async getWeatherForecastByLocation(
    @Query('lat') lat: string,
    @Query('lng') lng: string
  ) {
    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);

    if (isNaN(latNum) || isNaN(lngNum)) {
      return { error: 'Invalid coordinates' };
    }
    return this.weatherDataService.getWeatherForecastByLocation(latNum, lngNum);
  }

}
