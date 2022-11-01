import { PrismaService } from 'src/prisma/prisma.service';
import RegisterDto from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import LoginDto from './dto/login.dto';
import updateUserDto from './dto/updateUser.dto';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    register(dto: RegisterDto): Promise<{
        token: string;
        user_name: string;
        email: string;
        picture: string;
        role: string;
    }>;
    login(dto: LoginDto): Promise<{
        token: string;
        id: number;
        user_name: string;
        email: string;
        picture: string;
        role: string;
        articlenum: number;
        fans: number;
    }>;
    getUserInfo(id: number): Promise<import("@prisma/client").user>;
    updateUserInfo(id: any, body: updateUserDto): Promise<{
        user: import("@prisma/client").user;
    }>;
    delete(id: any): Promise<{
        message: string;
    }>;
    private token;
}
