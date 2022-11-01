import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { CreateTxupDto } from './dto/create-txup.dto';
import { UpdateTxupDto } from './dto/update-txup.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('txup')
export class TxupController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile('file') file) {
    //把文件信息返回给客户端
    return file;
  }
}
