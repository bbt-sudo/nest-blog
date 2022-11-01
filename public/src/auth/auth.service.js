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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const argon2_1 = require("argon2");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    async register(dto) {
        const password = await (0, argon2_1.hash)(dto.password);
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                user_name: dto.email,
                password,
                picture: dto.picture === undefined
                    ? 'https://blog-1253644396.cos.ap-hongkong.myqcloud.com/imag%2F37ed9f8cb40ba68e098e4de188a32a62.png'
                    : dto.picture,
                fans: 0,
                articlesnum: 0,
            },
        });
        const token = await this.token(user);
        return {
            token: token.token,
            user_name: dto.email,
            email: dto.email,
            picture: dto.picture,
            role: user.role,
        };
    }
    async login(dto) {
        console.log(dto);
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        console.log(user);
        if (!(await (0, argon2_1.verify)(user.password, dto.password))) {
            console.log(1111);
            throw new common_1.BadRequestException('密码输入错误');
        }
        const token = await this.token(user);
        return {
            token: token.token,
            id: user.id,
            user_name: dto.email,
            email: dto.email,
            picture: user.picture,
            role: user.role,
            articlenum: user.articlesnum,
            fans: user.fans,
        };
    }
    async getUserInfo(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });
        return user;
    }
    async updateUserInfo(id, body) {
        const user = await this.prisma.user.update({
            where: { id },
            data: Object.assign({ id: id }, body),
        });
        return {
            user,
        };
    }
    async delete(id) {
        const user = await this.prisma.user.delete({
            where: { id },
        });
        return {
            message: '用户已删除',
        };
    }
    async token({ email, id }) {
        return {
            token: await this.jwt.signAsync({
                email,
                sub: id,
            }),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map