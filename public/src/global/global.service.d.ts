import { PrismaService } from 'src/prisma/prisma.service';
import AttentionDto from './dto/Attention.dto';
import { UpdateGlobalDto } from './dto/update-global.dto';
export declare class GlobalService {
    private prisma;
    constructor(prisma: PrismaService);
    createFans(body: AttentionDto): Promise<import("@prisma/client").fanList | {
        message: string;
        code: number;
    }>;
    jiafans(Attention: any): Promise<void>;
    findFans(body: AttentionDto): Promise<{
        message: string;
        code: number;
    }>;
    concerned(id: number): string;
    update(id: number, updateGlobalDto: UpdateGlobalDto): string;
    remove(body: AttentionDto): import("@prisma/client").PrismaPromise<import("@prisma/client").Prisma.BatchPayload>;
    jianfans(Attention: any): Promise<void>;
}
