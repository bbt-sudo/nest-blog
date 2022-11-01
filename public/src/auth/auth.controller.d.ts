import { AuthService } from './auth.service';
import LoginDto from './dto/login.dto';
import RegisterDto from './dto/register.dto';
import updateUserDto from './dto/updateUser.dto';
export declare class AuthController {
    private auth;
    constructor(auth: AuthService);
    register(body: RegisterDto): Promise<{
        token: string;
        user_name: string;
        email: string;
        picture: string;
        role: string;
    }>;
    login(body: LoginDto): Promise<{
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
    updateUserInfo(id: number, body: updateUserDto): Promise<{
        user: import("@prisma/client").user;
    }>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
