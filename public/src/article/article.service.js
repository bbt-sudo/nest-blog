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
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ArticleService = class ArticleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createArticleDto) {
        const id = +createArticleDto.userId;
        const userid = await this.prisma.user.findFirst({
            where: {
                id,
            },
        });
        if (userid === null) {
            throw new common_1.BadRequestException('用户不存在');
        }
        const article = await this.prisma.article.create({
            data: {
                title: createArticleDto.title,
                content: createArticleDto.content,
                categoryId: +createArticleDto.categoryId,
                userId: +createArticleDto.userId,
                reading: 0,
                give: 0,
                img: '123',
            },
        });
        await this.articlenum(id);
        return article;
    }
    async articlenum(id) {
        const artnum = await this.prisma.article
            .count({
            where: {
                userId: id,
            },
        })
            .then(async (res) => {
            await this.prisma.user.update({
                where: { id },
                data: {
                    articlesnum: res,
                },
            });
        });
        console.log(artnum);
    }
    async findAll({ page, page_number }) {
        let article = [];
        if (page || page_number) {
            article = await this.prisma.article.findMany({
                skip: (page - 1) * page_number,
                take: +page_number,
            });
        }
        else {
            article = await this.prisma.article.findMany();
        }
        const total = await this.prisma.article.count();
        return {
            meta: {
                current_path: page,
                page_numbel: page_number,
                total,
                total_page: Math.ceil(total / page_number),
            },
            data: article,
        };
    }
    async findOne(id) {
        const article = await this.prisma.article.findFirst({
            where: { id },
        });
        return article;
    }
    async update(id, updateArticleDto) {
        return await this.prisma.article.update({
            where: {
                id,
            },
            data: Object.assign(Object.assign({}, updateArticleDto), { categoryId: +updateArticleDto.categoryId }),
        });
    }
    async remove(id) {
        return await this.prisma.article.delete({
            where: { id },
        });
    }
    async reading(body) {
        console.log(body);
        const artreading = await this.prisma.article.findUnique({
            where: { id: +body.id },
            select: {
                reading: true,
            },
        });
        const reading = artreading.reading + 1;
        await this.prisma.article.update({
            where: { id: +body.id },
            data: {
                reading: reading,
            },
        });
        return {
            message: '阅读量加一',
            reading,
        };
    }
    async give(body) {
        const id = +body.id;
        const artreading = await this.prisma.article.findUnique({
            where: { id },
            select: {
                give: true,
            },
        });
        const give = artreading.give + 1;
        await this.prisma.article.update({
            where: { id },
            data: {
                give: give,
            },
        });
        return {
            message: '点赞量加一',
            give,
        };
    }
};
ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map