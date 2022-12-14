import {
  applyDecorators,
  UnsupportedMediaTypeException,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

//上传文件监听
export function txFilter(type: string) {
  return (
    req: any,
    file: Express.Multer.File,
    callback: (error: Error | null, acceptFile: boolean) => void,
  ) => {
    if (!file.mimetype.includes(type)) {
      callback(new UnsupportedMediaTypeException('文件类型错误'), false);
    } else {
      callback(null, true);
    }
  };
}

//文件上传
export function Upload(field = 'file', options: MulterOptions) {
  return applyDecorators(UseInterceptors(FileInterceptor(field, options)));
}

//图片上传
export function UploadImage(field = 'file') {
  return Upload(field, {
    limits: Math.pow(1024, 2) * 2,
    fileFilter: txFilter('image'),
  } as MulterOptions);
}

//文档上传
export function UploadDocument(field = 'file') {
  return Upload(field, {
    limits: Math.pow(1024, 2) * 5,
    fileFilter: txFilter('document'),
  } as MulterOptions);
}
