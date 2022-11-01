import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    create(createReviewDto: CreateReviewDto): Promise<import("@prisma/client").review>;
    findreview(id: number): import("@prisma/client").PrismaPromise<import("@prisma/client").review[]>;
    findOne(id: string): string;
    update(id: string, updateReviewDto: UpdateReviewDto): string;
    remove(id: number): Promise<import("@prisma/client").review>;
}
