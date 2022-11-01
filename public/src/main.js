"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const validate_1 = __importDefault(require("./common/validate"));
const app_module_1 = require("./app.module");
const response_inteceptor_1 = require("./response.inteceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new validate_1.default());
    app.useGlobalInterceptors(new response_inteceptor_1.TransfromInterceptor());
    app.setGlobalPrefix('api');
    app.useStaticAssets('uploads', { prefix: '/uploads' });
    app.enableCors();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map