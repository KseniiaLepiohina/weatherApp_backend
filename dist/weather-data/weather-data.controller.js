"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherDataController = void 0;
const common_1 = require("@nestjs/common");
const weather_data_service_1 = require("./weather-data.service");
let WeatherDataController = class WeatherDataController {
    weatherDataService;
    constructor(weatherDataService) {
        this.weatherDataService = weatherDataService;
    }
    async getWeatherDataByLocation(lat, lng) {
        const latNum = parseFloat(lat);
        const lngNum = parseFloat(lng);
        if (isNaN(latNum) || isNaN(lngNum)) {
            return { error: 'Invalid coordinates' };
        }
        return this.weatherDataService.getWeatherDataByLocation(latNum, lngNum);
    }
    async getWeatherForecastByLocation(lat, lng) {
        const latNum = parseFloat(lat);
        const lngNum = parseFloat(lng);
        if (isNaN(latNum) || isNaN(lngNum)) {
            return { error: 'Invalid coordinates' };
        }
        return this.weatherDataService.getWeatherForecastByLocation(latNum, lngNum);
    }
    async weatherByCity(cityname, countrycode) {
        return this.weatherDataService.getWeatherByCity(cityname, countrycode);
    }
    async forecastByCity(cityname, countrycode) {
        return this.weatherDataService.getForecastByCity(cityname, countrycode);
    }
};
exports.WeatherDataController = WeatherDataController;
__decorate([
    (0, common_1.Get)('getWeatherDataByLocation'),
    __param(0, (0, common_1.Query)('lat')),
    __param(1, (0, common_1.Query)('lng')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WeatherDataController.prototype, "getWeatherDataByLocation", null);
__decorate([
    (0, common_1.Get)('getWeatherForecastByLocation'),
    __param(0, (0, common_1.Query)('lat')),
    __param(1, (0, common_1.Query)('lng')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WeatherDataController.prototype, "getWeatherForecastByLocation", null);
__decorate([
    (0, common_1.Get)('getWeatherByCity'),
    __param(0, (0, common_1.Query)('cityName')),
    __param(1, (0, common_1.Query)('countryCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WeatherDataController.prototype, "weatherByCity", null);
__decorate([
    (0, common_1.Get)('forecastByCityName'),
    __param(0, (0, common_1.Query)('cityName')),
    __param(1, (0, common_1.Query)('countryCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WeatherDataController.prototype, "forecastByCity", null);
exports.WeatherDataController = WeatherDataController = __decorate([
    (0, common_1.Controller)('weather-data'),
    __metadata("design:paramtypes", [weather_data_service_1.WeatherDataService])
], WeatherDataController);
//# sourceMappingURL=weather-data.controller.js.map