import { PrismaService } from '../prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import FindListDto from './dto/findlist.dto';
import ReadingDto from './dto/reading.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticleService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createArticleDto: CreateArticleDto): Promise<import("@prisma/client").article>;
    articlenum(id: number): Promise<void>;
    findAll({ page, page_number }: FindListDto): Promise<{
        meta: {
            current_path: number;
            page_numbel: number;
            total: number;
            total_page: number;
        };
        data: any[];
    }>;
    findOne(id: number): Promise<import("@prisma/client").article>;
    update(id: number, updateArticleDto: UpdateArticleDto): Promise<import("@prisma/client").article>;
    remove(id: number): Promise<import("@prisma/client").article>;
    reading(body: ReadingDto): Promise<{
        message: string;
        reading: number;
    }>;
    give(body: ReadingDto): Promise<{
        message: string;
        give: number;
    }>;
}
