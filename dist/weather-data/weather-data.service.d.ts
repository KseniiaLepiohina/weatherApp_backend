export declare class WeatherDataService {
    private readonly API_KEY;
    getWeatherDataByLocation(lat: number, lng: number): Promise<any>;
    getWeatherForecastByLocation(lat: number, lng: number): Promise<any>;
    getWeatherByCity(cityname: string, countrycode: string): Promise<any>;
    getForecastByCity(cityname: string, countrycode: string): Promise<any>;
}
