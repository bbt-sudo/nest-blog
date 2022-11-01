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
exports.GlobalService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GlobalService = class GlobalService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createFans(body) {
        const is = await this.prisma.fanList.count({
            where: {
                userId: +body.userId,
                Attention: +body.Attention,
            },
        });
        const userAttention = await this.prisma.user.findUnique({
            where: {
                id: +body.Attention,
            },
        });
        if (userAttention === null) {
            return {
                message: '没有用户',
                code: 0,
            };
        }
        if (is >= 1) {
            return {
                message: '已经关注',
                code: 0,
            };
        }
        const fanlist = this.prisma.fanList.create({
            data: {
                Attention: +body.Attention,
                userId: +body.userId,
            },
        });
        this.jiafans(body.Attention);
        return fanlist;
    }
    async jiafans(Attention) {
        const fans = await this.prisma.user.findUnique({
            where: {
                id: +Attention,
            },
            select: {
                fans: true,
            },
        });
        const user = await this.prisma.user.update({
            where: {
                id: +Attention,
            },
            data: {
                fans: fans.fans + 1,
            },
        });
    }
    async findFans(body) {
        const fans = await this.prisma.fanList.findMany({
            where: {
                Attention: +body.Attention,
                userId: +body.userId,
            },
        });
        const userAttention = await this.prisma.user.findUnique({
            where: {
                id: +body.Attention,
            },
        });
        if (userAttention === null) {
            throw new common_1.BadRequestException('没有用户');
        }
        if (fans.length === 0) {
            throw new common_1.BadRequestException('没有关注');
        }
        return {
            message: '关注过了',
            code: 0,
        };
    }
    concerned(id) {
        return `This action returns a #${id} global`;
    }
    update(id, updateGlobalDto) {
        return `This action updates a #${id} global`;
    }
    remove(body) {
        const fans = this.prisma.fanList.deleteMany({
            where: {
                userId: +body.userId,
                Attention: +body.Attention,
            },
        });
        console.log(fans);
        this.jiafans(body.Attention);
        return fans;
    }
    async jianfans(Attention) {
        const fans = await this.prisma.user.findUnique({
            where: {
                id: +Attention,
            },
            select: {
                fans: true,
            },
        });
        const user = await this.prisma.user.update({
            where: {
                id: +Attention,
            },
            data: {
                fans: fans.fans - 1,
            },
        });
    }
};
GlobalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GlobalService);
exports.GlobalService = GlobalService;
//# sourceMappingURL=global.service.js.map