import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import FansDto from './dto/fans.dto';
import LoginDto from './dto/login.dto';
import RegisterDto from './dto/register.dto';
import updateUserDto from './dto/updateUser.dto';

@Controller('user')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('register')
  register(@Body() body: RegisterDto) {
    return this.auth.register(body);
  }

  @Post('login')
  login(@Body() body: LoginDto) {
    return this.auth.login(body);
  }

  @Get(':id')
  getUserInfo(@Param('id') id: number) {
    return this.auth.getUserInfo(+id);
  }

  @Patch(':id')
  updateUserInfo(@Param('id') id: number, @Body() body: updateUserDto) {
    return this.auth.updateUserInfo(+id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.auth.delete(+id);
  }
}
