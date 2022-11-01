/// <reference types="express-serve-static-core" />
/// <reference types="passport" />
/// <reference types="multer" />
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
export declare function filterFilter(type: string): (req: any, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) => void;
export declare function Upload(field: string, options: MulterOptions): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare function UploadImage(field?: string): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare function UploadDocument(field?: string): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
