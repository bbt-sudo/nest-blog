import { GlobalService } from './global.service';
import { UpdateGlobalDto } from './dto/update-global.dto';
import AttentionDto from './dto/Attention.dto';
export declare class GlobalController {
    private readonly globalService;
    constructor(globalService: GlobalService);
    createFans(body: AttentionDto): Promise<import("@prisma/client").fanList | {
        message: string;
        code: number;
    }>;
    findFans(body: AttentionDto): Promise<{
        message: string;
        code: number;
    }>;
    findOne(userId: string): string;
    update(id: string, updateGlobalDto: UpdateGlobalDto): string;
    remove(body: AttentionDto): import("@prisma/client").PrismaPromise<import("@prisma/client").Prisma.BatchPayload>;
}
