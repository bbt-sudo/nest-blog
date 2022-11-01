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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalController = void 0;
const common_1 = require("@nestjs/common");
const global_service_1 = require("./global.service");
const update_global_dto_1 = require("./dto/update-global.dto");
const Attention_dto_1 = __importDefault(require("./dto/Attention.dto"));
let GlobalController = class GlobalController {
    constructor(globalService) {
        this.globalService = globalService;
    }
    createFans(body) {
        return this.globalService.createFans(body);
    }
    findFans(body) {
        return this.globalService.findFans(body);
    }
    findOne(userId) {
        return this.globalService.concerned(+userId);
    }
    update(id, updateGlobalDto) {
        return this.globalService.update(+id, updateGlobalDto);
    }
    remove(body) {
        return this.globalService.remove(body);
    }
};
__decorate([
    (0, common_1.Post)('attention'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Attention_dto_1.default]),
    __metadata("design:returntype", void 0)
], GlobalController.prototype, "createFans", null);
__decorate([
    (0, common_1.Post)('findeFans'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Attention_dto_1.default]),
    __metadata("design:returntype", void 0)
], GlobalController.prototype, "findFans", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GlobalController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_global_dto_1.UpdateGlobalDto]),
    __metadata("design:returntype", void 0)
], GlobalController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Attention_dto_1.default]),
    __metadata("design:returntype", void 0)
], GlobalController.prototype, "remove", null);
GlobalController = __decorate([
    (0, common_1.Controller)('global'),
    __metadata("design:paramtypes", [global_service_1.GlobalService])
], GlobalController);
exports.GlobalController = GlobalController;
//# sourceMappingURL=global.controller.js.map