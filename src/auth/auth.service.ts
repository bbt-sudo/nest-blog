import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import RegisterDto from './dto/register.dto';
import { hash, verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import LoginDto from './dto/login.dto';
import updateUserDto from './dto/updateUser.dto';
import FansDto from './dto/fans.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async register(dto: RegisterDto) {
    const password = await hash(dto.password);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        user_name: dto.email,
        password,
        picture:
          dto.picture === undefined
            ? 'https://blog-1253644396.cos.ap-hongkong.myqcloud.com/imag%2F37ed9f8cb40ba68e098e4de188a32a62.png'
            : dto.picture,
        fans: 0,
        articlesnum: 0,
      },
    });
    const token = await this.token(user);
    return {
      token: token.token,
      user_name: dto.email,
      email: dto.email,
      picture: dto.picture,
      role: user.role,
    };
  }

  async login(dto: LoginDto) {
    console.log(dto);

    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    console.log(user);
    if (!(await verify(user.password, dto.password))) {
      console.log(1111);
      throw new BadRequestException('密码输入错误');
    }
    const token = await this.token(user);
    return {
      token: token.token,
      id: user.id,
      user_name: dto.email,
      email: dto.email,
      picture: user.picture,
      role: user.role,
      articlenum: user.articlesnum,
      fans: user.fans,
    };
  }

  async getUserInfo(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user;
  }

  async updateUserInfo(id, body: updateUserDto) {
    const user = await this.prisma.user.update({
      where: { id },
      data: {
        id: id,
        ...body,
      },
    });
    return {
      user,
    };
  }

  async delete(id) {
    const user = await this.prisma.user.delete({
      where: { id },
    });
    return {
      message: '用户已删除',
    };
  }

  private async token({ email, id }) {
    return {
      token: await this.jwt.signAsync({
        email,
        sub: id,
      }),
    };
  }
}
