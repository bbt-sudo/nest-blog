import { MulterModule } from '@nestjs/platform-express';
import { TxupController } from './txup.controller';
import mcx from 'multer-cos-x';
import { Module } from '@nestjs/common';
@Module({
  imports: [
    MulterModule.register({
      storage: mcx({
        cos: {
          //
          // 必填参数
          SecretId: 'AKIDGRVO6ekGyVKIWckRjQ1UuF3gEvwmi0yK',
          SecretKey: 'PV1MZ89ybiniIi2FNYecS9kEdxkR0Tm6',
          Bucket: 'blog-1253644396',
          Region: 'ap-hongkong',
          // 可选参数
          //自定义域名协议, 不定义则会使用http
          domain: 'http://img.textwww.top/', // 自定义域名, 不定义则会使用cos默认域名
          dir: 'imag', // cos文件路径, 不定义则会上传至bucket的根目录
          onProgress: (progressData) => {
            //进度回调函数，回调是一个对象，包含进度信息
            console.log(progressData);
          },
        },
      }),
    }),
  ],
  controllers: [TxupController],
  providers: [],
})
export class TxupModule {}
