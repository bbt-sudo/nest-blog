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
Object.defineProperty(exports, "__esModule", { value: true });
const is_not_exists_tule_1 = require("../../common/rules/is-not-exists.tule");
class updateUserDto {
}
__decorate([
    (0, is_not_exists_tule_1.IsNoteExistsRule)('user', { message: '用户已经注册' }),
    __metadata("design:type", String)
], updateUserDto.prototype, "email", void 0);
exports.default = updateUserDto;
//# sourceMappingURL=updateUser.dto.js.map