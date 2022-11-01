import { IsNotEmpty } from 'class-validator';
import { IsConfirmRule } from 'src/common/rules/is-confirm.rule';
import { IsNoteExistsRule } from 'src/common/rules/is-not-exists.tule';

export default class RegisterDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsNoteExistsRule('user', { message: '用户已经注册' })
  email: string;
  @IsNotEmpty({ message: '密码不能为空' })
  @IsConfirmRule({ message: '两次密码不一致' })
  password: string;
  @IsNotEmpty({ message: '确认密码不能为空' })
  password_confirm: string;
  user_name: string;
  picture: string;
  fans: number;
  articlenum: number;
}
