"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Weather forecast')
        .setDescription('The weather forecast API description')
        .setVersion('1.0')
        .addTag('weather, OpenWeatherApi')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, documentFactory);
    app.enableCors({
        origin: 'https://weather-app-one-steel-71.vercel.app',
        credentials: true,
    });
    await app.listen('https://weather-app-backend-agme.onrender.com');
}
bootstrap();
//# sourceMappingURL=main.js.map