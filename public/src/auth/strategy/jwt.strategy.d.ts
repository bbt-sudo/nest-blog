import { PrismaService } from 'src/prisma/prisma.service';
import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(prisma: PrismaService, configService: ConfigService);
    validate({ sub: id }: {
        sub: any;
    }): Promise<import("@prisma/client").user>;
}
export {};
