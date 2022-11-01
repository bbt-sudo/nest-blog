import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import multer from 'multer';
import { extname } from 'path';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: multer.diskStorage({
            //文件储存位置
            destination: 'uploads',
            //文件名定制
            filename: (req, file, callback) => {
              const path =
                Date.now() +
                '-' +
                Math.round(Math.random() * 1e10) +
                extname(file.originalname);
              callback(null, path);
            },
          }),
        };
      },
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
