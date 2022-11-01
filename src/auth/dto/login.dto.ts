import { IsNotEmpty } from 'class-validator';
import { IsExisteRule } from 'src/common/rules/is-existe.rule';

export default class LoginDto {
  @IsNotEmpty({ message: '邮箱不能为空' })
  @IsExisteRule('user', { message: '账号不存在' })
  email: string;
  @IsNotEmpty({ message: '密码不能为空' })
  password: string;
}
