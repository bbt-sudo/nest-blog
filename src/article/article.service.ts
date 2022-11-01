import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import FindListDto from './dto/findlist.dto';
import ReadingDto from './dto/reading.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}
  async create(createArticleDto: CreateArticleDto) {
    const id = +createArticleDto.userId;
    const userid = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
    if (userid === null) {
      throw new BadRequestException('用户不存在');
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
  async articlenum(id: number) {
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

  async findAll({ page, page_number }: FindListDto) {
    let article = [];
    if (page || page_number) {
      article = await this.prisma.article.findMany({
        skip: (page - 1) * page_number,
        take: +page_number,
      });
      // console.log(article);s
    } else {
      article = await this.prisma.article.findMany();
      // console.log(article);
    }

    const total = await this.prisma.article.count();
    // console.log(total);
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

  async findOne(id: number) {
    const article = await this.prisma.article.findFirst({
      where: { id },
    });
    return article;
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    return await this.prisma.article.update({
      where: {
        id,
      },
      data: { ...updateArticleDto, categoryId: +updateArticleDto.categoryId },
    });
  }

  async remove(id: number) {
    return await this.prisma.article.delete({
      where: { id },
    });
  }

  async reading(body: ReadingDto) {
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

  async give(body: ReadingDto) {
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
}
