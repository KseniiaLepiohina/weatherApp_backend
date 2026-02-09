"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherDataService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
let WeatherDataService = class WeatherDataService {
    API_KEY = process.env.API_KEY;
    async getWeatherDataByLocation(lat, lng) {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${this.API_KEY}&units=metric`;
            const response = await axios_1.default.get(url);
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch weather data', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getWeatherForecastByLocation(lat, lng) {
        try {
            const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${this.API_KEY}&units=metric`;
            const response = await axios_1.default.get(url);
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch weather data', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getWeatherByCity(cityname, countrycode) {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname},${countrycode}&appid=${this.API_KEY}&units=metric`;
            const response = await axios_1.default.get(url);
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch weather data by city', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getForecastByCity(cityname, countrycode) {
        try {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname},${countrycode}&appid=${this.API_KEY}&units=metric`;
            const response = await axios_1.default.get(url);
            return response.data;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch forecast data by city', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.WeatherDataService = WeatherDataService;
exports.WeatherDataService = WeatherDataService = __decorate([
    (0, common_1.Injectable)()
], WeatherDataService);
//# sourceMappingURL=weather-data.service.js.map