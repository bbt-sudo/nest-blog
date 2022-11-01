import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import FindListDto from './dto/findlist.dto';
import ReadingDto from './dto/reading.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    create(createArticleDto: CreateArticleDto): Promise<import("@prisma/client").article>;
    findAll(body: FindListDto): Promise<{
        meta: {
            current_path: number;
            page_numbel: number;
            total: number;
            total_page: number;
        };
        data: any[];
    }>;
    findOne(id: string): Promise<import("@prisma/client").article>;
    update(id: string, updateArticleDto: UpdateArticleDto): Promise<import("@prisma/client").article>;
    remove(id: string): Promise<import("@prisma/client").article>;
    reading(body: ReadingDto): Promise<{
        message: string;
        reading: number;
    }>;
    give(body: ReadingDto): Promise<{
        message: string;
        give: number;
    }>;
}
