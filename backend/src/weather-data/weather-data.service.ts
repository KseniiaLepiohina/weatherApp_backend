import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { HttpStatusCode } from 'axios';

@Injectable()
export class WeatherDataService {
  private readonly API_KEY = process.env.API_KEY;


  async getWeatherDataByLocation(lat: number, lng: number) {
    try {

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${this.API_KEY}&units=metric`;

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException('Failed to fetch weather data', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getWeatherForecastByLocation(lat: number, lng: number) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${this.API_KEY}&units=metric`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException('Failed to fetch weather data', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getWeatherByCity(cityname: string, countrycode: string) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname},${countrycode}&appid=${this.API_KEY}&units=metric`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException('Failed to fetch weather data by city',HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getForecastByCity(cityname:string,countrycode:string) {
    try{
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname},${countrycode}&appid=${this.API_KEY}&units=metric`;
      const response = await axios.get(url);
      return response.data;
    }catch(error) {
      throw new HttpException('Failed to fetch forecast data by city',HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}