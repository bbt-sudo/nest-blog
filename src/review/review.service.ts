import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}
  async create(createReviewDto: CreateReviewDto) {
    const review = await this.prisma.review.create({
      data: {
        text: createReviewDto.text,
        userId: +createReviewDto.userId,
        articleId: +createReviewDto.articleId,
      },
    });
    return review;
  }

  findreview(articleId: number) {
    const reviewList = this.prisma.review.findMany({
      where: {
        articleId: +articleId,
      },
    });
    return reviewList;
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  async remove(id: number) {
    const review = await this.prisma.review.delete({
      where: {
        id,
      },
    });
    return review;
  }
}
