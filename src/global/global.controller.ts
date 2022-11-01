import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GlobalService } from './global.service';
import { CreateGlobalDto } from './dto/create-global.dto';
import { UpdateGlobalDto } from './dto/update-global.dto';
import AttentionDto from './dto/Attention.dto';

@Controller('global')
export class GlobalController {
  constructor(private readonly globalService: GlobalService) {}

  @Post('attention')
  createFans(@Body() body: AttentionDto) {
    return this.globalService.createFans(body);
  }

  @Post('findeFans')
  findFans(@Body() body: AttentionDto) {
    return this.globalService.findFans(body);
  }

  @Get(':userId')
  findOne(@Param('userId') userId: string) {
    return this.globalService.concerned(+userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGlobalDto: UpdateGlobalDto) {
    return this.globalService.update(+id, updateGlobalDto);
  }

  @Post('delete')
  remove(@Body() body: AttentionDto) {
    return this.globalService.remove(body);
  }
}
