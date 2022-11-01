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
exports.TxupModule = void 0;
const platform_express_1 = require("@nestjs/platform-express");
const txup_controller_1 = require("./txup.controller");
const multer_cos_x_1 = __importDefault(require("multer-cos-x"));
const common_1 = require("@nestjs/common");
let TxupModule = class TxupModule {
};
TxupModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({
                storage: (0, multer_cos_x_1.default)({
                    cos: {
                        SecretId: 'AKIDGRVO6ekGyVKIWckRjQ1UuF3gEvwmi0yK',
                        SecretKey: 'PV1MZ89ybiniIi2FNYecS9kEdxkR0Tm6',
                        Bucket: 'blog-1253644396',
                        Region: 'ap-hongkong',
                        domain: 'http://img.textwww.top/',
                        dir: 'imag',
                        onProgress: (progressData) => {
                            console.log(progressData);
                        },
                    },
                }),
            }),
        ],
        controllers: [txup_controller_1.TxupController],
        providers: [],
    })
], TxupModule);
exports.TxupModule = TxupModule;
//# sourceMappingURL=txup.module.js.map