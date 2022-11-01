import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ArticleModule } from './article/article.module';
import { CategoryModule } from './category/category.module';
import { JwtStrategy } from './auth/strategy/jwt.strategy';
import { UploadModule } from './upload/upload.module';
import { TxupModule } from './txup/txup.module';
import { ReviewModule } from './review/review.module';
import { GlobalModule } from './global/global.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ArticleModule,
    CategoryModule,
    UploadModule,
    TxupModule,
    ReviewModule,
    GlobalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
