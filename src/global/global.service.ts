import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import AttentionDto from './dto/Attention.dto';
import { CreateGlobalDto } from './dto/create-global.dto';
import { UpdateGlobalDto } from './dto/update-global.dto';

@Injectable()
export class GlobalService {
  constructor(private prisma: PrismaService) {}
  async createFans(body: AttentionDto) {
    const is = await this.prisma.fanList.count({
      where: {
        userId: +body.userId,
        Attention: +body.Attention,
      },
    });
    const userAttention = await this.prisma.user.findUnique({
      where: {
        id: +body.Attention,
      },
    });
    // console.log(userAttention);
    if (userAttention === null) {
      // console.log(111);
      return {
        message: '没有用户',
        code: 0,
      };
    }
    if (is >= 1) {
      return {
        message: '已经关注',
        code: 0,
      };
    }
    const fanlist = this.prisma.fanList.create({
      data: {
        Attention: +body.Attention,
        userId: +body.userId,
      },
    });
    // const attention = await this.prisma.fanList.create({
    //   data: {
    //     userId: body.userId,
    //     Attention: +body.Attention,
    //   },
    // });
    this.jiafans(body.Attention);
    return fanlist;
  }

  async jiafans(Attention) {
    const fans = await this.prisma.user.findUnique({
      where: {
        id: +Attention,
      },
      select: {
        fans: true,
      },
    });
    const user = await this.prisma.user.update({
      where: {
        id: +Attention,
      },
      data: {
        fans: fans.fans + 1,
      },
    });
  }

  async findFans(body: AttentionDto) {
    const fans = await this.prisma.fanList.findMany({
      where: {
        Attention: +body.Attention,
        userId: +body.userId,
      },
    });
    const userAttention = await this.prisma.user.findUnique({
      where: {
        id: +body.Attention,
      },
    });
    // console.log(userAttention);
    if (userAttention === null) {
      // console.log(111);
      throw new BadRequestException('没有用户');
    }
    if (fans.length === 0) {
      throw new BadRequestException('没有关注');
    }
    return {
      message: '关注过了',
      code: 0,
    };
  }

  concerned(id: number) {
    return `This action returns a #${id} global`;
  }

  update(id: number, updateGlobalDto: UpdateGlobalDto) {
    return `This action updates a #${id} global`;
  }

  remove(body: AttentionDto) {
    const fans = this.prisma.fanList.deleteMany({
      where: {
        userId: +body.userId,
        Attention: +body.Attention,
      },
    });
    console.log(fans);
    this.jiafans(body.Attention);
    return fans;
  }
  async jianfans(Attention) {
    const fans = await this.prisma.user.findUnique({
      where: {
        id: +Attention,
      },
      select: {
        fans: true,
      },
    });
    const user = await this.prisma.user.update({
      where: {
        id: +Attention,
      },
      data: {
        fans: fans.fans - 1,
      },
    });
  }
}
