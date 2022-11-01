import { PrismaService } from 'src/prisma/prisma.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private prisma: PrismaService, configService: ConfigService) {
    console.log(ExtractJwt.fromAuthHeaderAsBearerToken());
    console.log('TOKEN_SECRET');
    super({
      //解析用户提交的header中的Bearer Token数据
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //加密码的 secret
      secretOrKey: configService.get('TOKEN_SECRECT'),
    });
  }

  //验证通过后获取用户资料
  async validate({ sub: id }) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
}
