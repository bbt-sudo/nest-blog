import { PrismaClient } from '@prisma/client';
import { hash } from 'argon2';
import _ from 'lodash';
import { Random } from 'mockjs';

const prisma = new PrismaClient();
async function run() {
  await prisma.user.create({
    data: {
      email: '123456789@qq.com',
      password: await hash('admin'),
      user_name: '123456789@qq.com',
      fans: 0,
      articlesnum: 0,
      picture:
        'https://blog-1253644396.cos.ap-hongkong.myqcloud.com/imag%2F37ed9f8cb40ba68e098e4de188a32a62.png',
      role: 'admin',
    },
  });

  for (let i = 1; i <= 5; i++) {
    await prisma.category.create({
      data: {
        title: Random.ctitle(3, 6),
      },
    });
  }

  for (let i = 0; i < 10; i++) {
    await prisma.article.create({
      data: {
        title: Random.ctitle(10, 30),
        content: Random.cparagraph(30, 50),
        categoryId: _.random(1, 5),
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
        text: Random.ctitle(5, 10),
        userId: 1,
        articleId: _.random(1, 10),
      },
    });
  }
}

run();
