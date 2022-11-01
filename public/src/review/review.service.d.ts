import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createReviewDto: CreateReviewDto): Promise<import("@prisma/client").review>;
    findreview(articleId: number): import("@prisma/client").PrismaPromise<import("@prisma/client").review[]>;
    findOne(id: number): string;
    update(id: number, updateReviewDto: UpdateReviewDto): string;
    remove(id: number): Promise<import("@prisma/client").review>;
}
