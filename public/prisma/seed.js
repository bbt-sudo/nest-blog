"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const argon2_1 = require("argon2");
const lodash_1 = __importDefault(require("lodash"));
const mockjs_1 = require("mockjs");
const prisma = new client_1.PrismaClient();
async function run() {
    await prisma.user.create({
        data: {
            email: '123456789@qq.com',
            password: await (0, argon2_1.hash)('admin'),
            user_name: '123456789@qq.com',
            fans: 0,
            articlesnum: 0,
            picture: 'https://blog-1253644396.cos.ap-hongkong.myqcloud.com/imag%2F37ed9f8cb40ba68e098e4de188a32a62.png',
            role: 'admin',
        },
    });
    for (let i = 1; i <= 5; i++) {
        await prisma.category.create({
            data: {
                title: mockjs_1.Random.ctitle(3, 6),
            },
        });
    }
    for (let i = 0; i < 10; i++) {
        await prisma.article.create({
            data: {
                title: mockjs_1.Random.ctitle(10, 30),
                content: mockjs_1.Random.cparagraph(30, 50),
                categoryId: lodash_1.default.random(1, 5),
                userId: 1,
                reading: 0,
                give: 1,
                img: 'https://blog-1253644396.cos.ap-hongkong.myqcloud.com/imag%2F37ed9f8cb40ba68e098e4de188a32a62.png',
            },
        });
    }
    for (let i = 0; i < 20; i++) {
        await prisma.review.create({
            data: {
                text: mockjs_1.Random.ctitle(5, 10),
                userId: 1,
                articleId: lodash_1.default.random(1, 10),
            },
        });
    }
}
run();
//# sourceMappingURL=seed.js.map