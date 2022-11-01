import { IsNotEmpty } from 'class-validator';
import { IsConfirmRule } from 'src/common/rules/is-confirm.rule';
import { IsExisteRule } from 'src/common/rules/is-existe.rule';
import { IsNoteExistsRule } from 'src/common/rules/is-not-exists.tule';

export default class updateUserDto {
  @IsNoteExistsRule('user', { message: '用户已经注册' })
  email: string;
  user_name: string;
  password: string;
  picture: string;
}
