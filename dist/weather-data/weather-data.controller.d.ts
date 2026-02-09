import { WeatherDataService } from './weather-data.service';
export declare class WeatherDataController {
    private readonly weatherDataService;
    constructor(weatherDataService: WeatherDataService);
    getWeatherDataByLocation(lat: string, lng: string): Promise<any>;
    getWeatherForecastByLocation(lat: string, lng: string): Promise<any>;
    weatherByCity(cityname: string, countrycode: string): Promise<any>;
    forecastByCity(cityname: string, countrycode: string): Promise<any>;
}
